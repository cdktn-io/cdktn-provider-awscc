# `dataAwsccAppsyncChannelNamespace` Submodule <a name="`dataAwsccAppsyncChannelNamespace` Submodule" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccAppsyncChannelNamespace <a name="DataAwsccAppsyncChannelNamespace" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/appsync_channel_namespace awscc_appsync_channel_namespace}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_appsync_channel_namespace

dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/appsync_channel_namespace#id DataAwsccAppsyncChannelNamespace#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccAppsyncChannelNamespace resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_appsync_channel_namespace

dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_appsync_channel_namespace

dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_appsync_channel_namespace

dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_appsync_channel_namespace

dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccAppsyncChannelNamespace resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccAppsyncChannelNamespace to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccAppsyncChannelNamespace that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/appsync_channel_namespace#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccAppsyncChannelNamespace to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.property.apiId">api_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.property.channelNamespaceArn">channel_namespace_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.property.codeHandlers">code_handlers</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.property.codeS3Location">code_s3_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.property.handlerConfigs">handler_configs</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOutputReference">DataAwsccAppsyncChannelNamespaceHandlerConfigsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.property.publishAuthModes">publish_auth_modes</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesList">DataAwsccAppsyncChannelNamespacePublishAuthModesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.property.subscribeAuthModes">subscribe_auth_modes</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesList">DataAwsccAppsyncChannelNamespaceSubscribeAuthModesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsList">DataAwsccAppsyncChannelNamespaceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `api_id`<sup>Required</sup> <a name="api_id" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.property.apiId"></a>

```python
api_id: str
```

- *Type:* str

---

##### `channel_namespace_arn`<sup>Required</sup> <a name="channel_namespace_arn" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.property.channelNamespaceArn"></a>

```python
channel_namespace_arn: str
```

- *Type:* str

---

##### `code_handlers`<sup>Required</sup> <a name="code_handlers" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.property.codeHandlers"></a>

```python
code_handlers: str
```

- *Type:* str

---

##### `code_s3_location`<sup>Required</sup> <a name="code_s3_location" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.property.codeS3Location"></a>

```python
code_s3_location: str
```

- *Type:* str

---

##### `handler_configs`<sup>Required</sup> <a name="handler_configs" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.property.handlerConfigs"></a>

```python
handler_configs: DataAwsccAppsyncChannelNamespaceHandlerConfigsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOutputReference">DataAwsccAppsyncChannelNamespaceHandlerConfigsOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `publish_auth_modes`<sup>Required</sup> <a name="publish_auth_modes" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.property.publishAuthModes"></a>

```python
publish_auth_modes: DataAwsccAppsyncChannelNamespacePublishAuthModesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesList">DataAwsccAppsyncChannelNamespacePublishAuthModesList</a>

---

##### `subscribe_auth_modes`<sup>Required</sup> <a name="subscribe_auth_modes" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.property.subscribeAuthModes"></a>

```python
subscribe_auth_modes: DataAwsccAppsyncChannelNamespaceSubscribeAuthModesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesList">DataAwsccAppsyncChannelNamespaceSubscribeAuthModesList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.property.tags"></a>

```python
tags: DataAwsccAppsyncChannelNamespaceTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsList">DataAwsccAppsyncChannelNamespaceTagsList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccAppsyncChannelNamespaceConfig <a name="DataAwsccAppsyncChannelNamespaceConfig" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_appsync_channel_namespace

dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/appsync_channel_namespace#id DataAwsccAppsyncChannelNamespace#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccAppsyncChannelNamespaceHandlerConfigs <a name="DataAwsccAppsyncChannelNamespaceHandlerConfigs" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigs.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_appsync_channel_namespace

dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigs()
```


### DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublish <a name="DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublish" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublish"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublish.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_appsync_channel_namespace

dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublish()
```


### DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegration <a name="DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegration" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_appsync_channel_namespace

dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegration()
```


### DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfig <a name="DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfig" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_appsync_channel_namespace

dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfig()
```


### DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribe <a name="DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribe" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribe"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribe.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_appsync_channel_namespace

dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribe()
```


### DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegration <a name="DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegration" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_appsync_channel_namespace

dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegration()
```


### DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfig <a name="DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfig" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_appsync_channel_namespace

dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfig()
```


### DataAwsccAppsyncChannelNamespacePublishAuthModes <a name="DataAwsccAppsyncChannelNamespacePublishAuthModes" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModes.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_appsync_channel_namespace

dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModes()
```


### DataAwsccAppsyncChannelNamespaceSubscribeAuthModes <a name="DataAwsccAppsyncChannelNamespaceSubscribeAuthModes" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModes.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_appsync_channel_namespace

dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModes()
```


### DataAwsccAppsyncChannelNamespaceTags <a name="DataAwsccAppsyncChannelNamespaceTags" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_appsync_channel_namespace

dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference <a name="DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_appsync_channel_namespace

dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.property.invokeType">invoke_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfig">DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `invoke_type`<sup>Required</sup> <a name="invoke_type" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.property.invokeType"></a>

```python
invoke_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfig">DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfig</a>

---


### DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference <a name="DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_appsync_channel_namespace

dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.property.dataSourceName">data_source_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.property.lambdaConfig">lambda_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference">DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegration">DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `data_source_name`<sup>Required</sup> <a name="data_source_name" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.property.dataSourceName"></a>

```python
data_source_name: str
```

- *Type:* str

---

##### `lambda_config`<sup>Required</sup> <a name="lambda_config" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.property.lambdaConfig"></a>

```python
lambda_config: DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference">DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegration">DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegration</a>

---


### DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference <a name="DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_appsync_channel_namespace

dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.property.behavior">behavior</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.property.integration">integration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference">DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublish">DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublish</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `behavior`<sup>Required</sup> <a name="behavior" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.property.behavior"></a>

```python
behavior: str
```

- *Type:* str

---

##### `integration`<sup>Required</sup> <a name="integration" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.property.integration"></a>

```python
integration: DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference">DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublish
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublish">DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublish</a>

---


### DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference <a name="DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_appsync_channel_namespace

dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.property.invokeType">invoke_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfig">DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `invoke_type`<sup>Required</sup> <a name="invoke_type" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.property.invokeType"></a>

```python
invoke_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfig">DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfig</a>

---


### DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference <a name="DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_appsync_channel_namespace

dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.property.dataSourceName">data_source_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.property.lambdaConfig">lambda_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference">DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegration">DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `data_source_name`<sup>Required</sup> <a name="data_source_name" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.property.dataSourceName"></a>

```python
data_source_name: str
```

- *Type:* str

---

##### `lambda_config`<sup>Required</sup> <a name="lambda_config" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.property.lambdaConfig"></a>

```python
lambda_config: DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference">DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegration">DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegration</a>

---


### DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference <a name="DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_appsync_channel_namespace

dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.property.behavior">behavior</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.property.integration">integration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference">DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribe">DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribe</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `behavior`<sup>Required</sup> <a name="behavior" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.property.behavior"></a>

```python
behavior: str
```

- *Type:* str

---

##### `integration`<sup>Required</sup> <a name="integration" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.property.integration"></a>

```python
integration: DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference">DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribe
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribe">DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribe</a>

---


### DataAwsccAppsyncChannelNamespaceHandlerConfigsOutputReference <a name="DataAwsccAppsyncChannelNamespaceHandlerConfigsOutputReference" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_appsync_channel_namespace

dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOutputReference.property.onPublish">on_publish</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference">DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOutputReference.property.onSubscribe">on_subscribe</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference">DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigs">DataAwsccAppsyncChannelNamespaceHandlerConfigs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `on_publish`<sup>Required</sup> <a name="on_publish" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOutputReference.property.onPublish"></a>

```python
on_publish: DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference">DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference</a>

---

##### `on_subscribe`<sup>Required</sup> <a name="on_subscribe" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOutputReference.property.onSubscribe"></a>

```python
on_subscribe: DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference">DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccAppsyncChannelNamespaceHandlerConfigs
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigs">DataAwsccAppsyncChannelNamespaceHandlerConfigs</a>

---


### DataAwsccAppsyncChannelNamespacePublishAuthModesList <a name="DataAwsccAppsyncChannelNamespacePublishAuthModesList" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_appsync_channel_namespace

dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccAppsyncChannelNamespacePublishAuthModesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccAppsyncChannelNamespacePublishAuthModesOutputReference <a name="DataAwsccAppsyncChannelNamespacePublishAuthModesOutputReference" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_appsync_channel_namespace

dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesOutputReference.property.authType">auth_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModes">DataAwsccAppsyncChannelNamespacePublishAuthModes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auth_type`<sup>Required</sup> <a name="auth_type" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesOutputReference.property.authType"></a>

```python
auth_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccAppsyncChannelNamespacePublishAuthModes
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModes">DataAwsccAppsyncChannelNamespacePublishAuthModes</a>

---


### DataAwsccAppsyncChannelNamespaceSubscribeAuthModesList <a name="DataAwsccAppsyncChannelNamespaceSubscribeAuthModesList" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_appsync_channel_namespace

dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccAppsyncChannelNamespaceSubscribeAuthModesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccAppsyncChannelNamespaceSubscribeAuthModesOutputReference <a name="DataAwsccAppsyncChannelNamespaceSubscribeAuthModesOutputReference" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_appsync_channel_namespace

dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesOutputReference.property.authType">auth_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModes">DataAwsccAppsyncChannelNamespaceSubscribeAuthModes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auth_type`<sup>Required</sup> <a name="auth_type" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesOutputReference.property.authType"></a>

```python
auth_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccAppsyncChannelNamespaceSubscribeAuthModes
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModes">DataAwsccAppsyncChannelNamespaceSubscribeAuthModes</a>

---


### DataAwsccAppsyncChannelNamespaceTagsList <a name="DataAwsccAppsyncChannelNamespaceTagsList" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_appsync_channel_namespace

dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccAppsyncChannelNamespaceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccAppsyncChannelNamespaceTagsOutputReference <a name="DataAwsccAppsyncChannelNamespaceTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_appsync_channel_namespace

dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTags">DataAwsccAppsyncChannelNamespaceTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccAppsyncChannelNamespaceTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTags">DataAwsccAppsyncChannelNamespaceTags</a>

---



