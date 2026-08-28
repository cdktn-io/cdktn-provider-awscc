# `dataAwsccPinpointInAppTemplate` Submodule <a name="`dataAwsccPinpointInAppTemplate` Submodule" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccPinpointInAppTemplate <a name="DataAwsccPinpointInAppTemplate" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/pinpoint_in_app_template awscc_pinpoint_in_app_template}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_pinpoint_in_app_template

dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/pinpoint_in_app_template#id DataAwsccPinpointInAppTemplate#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccPinpointInAppTemplate resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_pinpoint_in_app_template

dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_pinpoint_in_app_template

dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_pinpoint_in_app_template

dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_pinpoint_in_app_template

dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccPinpointInAppTemplate resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccPinpointInAppTemplate to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccPinpointInAppTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/pinpoint_in_app_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccPinpointInAppTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.property.content">content</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentList">DataAwsccPinpointInAppTemplateContentList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.property.customConfig">custom_config</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.property.layout">layout</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.property.tags">tags</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.property.templateDescription">template_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.property.templateName">template_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.property.content"></a>

```python
content: DataAwsccPinpointInAppTemplateContentList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentList">DataAwsccPinpointInAppTemplateContentList</a>

---

##### `custom_config`<sup>Required</sup> <a name="custom_config" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.property.customConfig"></a>

```python
custom_config: str
```

- *Type:* str

---

##### `layout`<sup>Required</sup> <a name="layout" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.property.layout"></a>

```python
layout: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.property.tags"></a>

```python
tags: str
```

- *Type:* str

---

##### `template_description`<sup>Required</sup> <a name="template_description" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.property.templateDescription"></a>

```python
template_description: str
```

- *Type:* str

---

##### `template_name`<sup>Required</sup> <a name="template_name" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.property.templateName"></a>

```python
template_name: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccPinpointInAppTemplateConfig <a name="DataAwsccPinpointInAppTemplateConfig" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_pinpoint_in_app_template

dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/pinpoint_in_app_template#id DataAwsccPinpointInAppTemplate#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccPinpointInAppTemplateContent <a name="DataAwsccPinpointInAppTemplateContent" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContent.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_pinpoint_in_app_template

dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContent()
```


### DataAwsccPinpointInAppTemplateContentBodyConfig <a name="DataAwsccPinpointInAppTemplateContentBodyConfig" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_pinpoint_in_app_template

dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfig()
```


### DataAwsccPinpointInAppTemplateContentHeaderConfig <a name="DataAwsccPinpointInAppTemplateContentHeaderConfig" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_pinpoint_in_app_template

dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfig()
```


### DataAwsccPinpointInAppTemplateContentPrimaryBtn <a name="DataAwsccPinpointInAppTemplateContentPrimaryBtn" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtn"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtn.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_pinpoint_in_app_template

dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtn()
```


### DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroid <a name="DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroid" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroid"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroid.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_pinpoint_in_app_template

dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroid()
```


### DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfig <a name="DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfig" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_pinpoint_in_app_template

dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfig()
```


### DataAwsccPinpointInAppTemplateContentPrimaryBtnIos <a name="DataAwsccPinpointInAppTemplateContentPrimaryBtnIos" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIos"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIos.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_pinpoint_in_app_template

dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIos()
```


### DataAwsccPinpointInAppTemplateContentPrimaryBtnWeb <a name="DataAwsccPinpointInAppTemplateContentPrimaryBtnWeb" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWeb"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWeb.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_pinpoint_in_app_template

dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWeb()
```


### DataAwsccPinpointInAppTemplateContentSecondaryBtn <a name="DataAwsccPinpointInAppTemplateContentSecondaryBtn" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtn"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtn.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_pinpoint_in_app_template

dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtn()
```


### DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroid <a name="DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroid" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroid"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroid.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_pinpoint_in_app_template

dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroid()
```


### DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfig <a name="DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfig" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_pinpoint_in_app_template

dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfig()
```


### DataAwsccPinpointInAppTemplateContentSecondaryBtnIos <a name="DataAwsccPinpointInAppTemplateContentSecondaryBtnIos" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIos"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIos.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_pinpoint_in_app_template

dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIos()
```


### DataAwsccPinpointInAppTemplateContentSecondaryBtnWeb <a name="DataAwsccPinpointInAppTemplateContentSecondaryBtnWeb" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWeb"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWeb.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_pinpoint_in_app_template

dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWeb()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference <a name="DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_pinpoint_in_app_template

dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.property.alignment">alignment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.property.body">body</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.property.textColor">text_color</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfig">DataAwsccPinpointInAppTemplateContentBodyConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `alignment`<sup>Required</sup> <a name="alignment" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.property.alignment"></a>

```python
alignment: str
```

- *Type:* str

---

##### `body`<sup>Required</sup> <a name="body" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.property.body"></a>

```python
body: str
```

- *Type:* str

---

##### `text_color`<sup>Required</sup> <a name="text_color" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.property.textColor"></a>

```python
text_color: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccPinpointInAppTemplateContentBodyConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfig">DataAwsccPinpointInAppTemplateContentBodyConfig</a>

---


### DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference <a name="DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_pinpoint_in_app_template

dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.property.alignment">alignment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.property.header">header</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.property.textColor">text_color</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfig">DataAwsccPinpointInAppTemplateContentHeaderConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `alignment`<sup>Required</sup> <a name="alignment" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.property.alignment"></a>

```python
alignment: str
```

- *Type:* str

---

##### `header`<sup>Required</sup> <a name="header" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.property.header"></a>

```python
header: str
```

- *Type:* str

---

##### `text_color`<sup>Required</sup> <a name="text_color" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.property.textColor"></a>

```python
text_color: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccPinpointInAppTemplateContentHeaderConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfig">DataAwsccPinpointInAppTemplateContentHeaderConfig</a>

---


### DataAwsccPinpointInAppTemplateContentList <a name="DataAwsccPinpointInAppTemplateContentList" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_pinpoint_in_app_template

dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccPinpointInAppTemplateContentOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccPinpointInAppTemplateContentOutputReference <a name="DataAwsccPinpointInAppTemplateContentOutputReference" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_pinpoint_in_app_template

dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.property.backgroundColor">background_color</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.property.bodyConfig">body_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference">DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.property.headerConfig">header_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference">DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.property.imageUrl">image_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.property.primaryBtn">primary_btn</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference">DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.property.secondaryBtn">secondary_btn</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference">DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContent">DataAwsccPinpointInAppTemplateContent</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `background_color`<sup>Required</sup> <a name="background_color" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.property.backgroundColor"></a>

```python
background_color: str
```

- *Type:* str

---

##### `body_config`<sup>Required</sup> <a name="body_config" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.property.bodyConfig"></a>

```python
body_config: DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference">DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference</a>

---

##### `header_config`<sup>Required</sup> <a name="header_config" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.property.headerConfig"></a>

```python
header_config: DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference">DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference</a>

---

##### `image_url`<sup>Required</sup> <a name="image_url" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.property.imageUrl"></a>

```python
image_url: str
```

- *Type:* str

---

##### `primary_btn`<sup>Required</sup> <a name="primary_btn" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.property.primaryBtn"></a>

```python
primary_btn: DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference">DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference</a>

---

##### `secondary_btn`<sup>Required</sup> <a name="secondary_btn" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.property.secondaryBtn"></a>

```python
secondary_btn: DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference">DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccPinpointInAppTemplateContent
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContent">DataAwsccPinpointInAppTemplateContent</a>

---


### DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference <a name="DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_pinpoint_in_app_template

dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.property.buttonAction">button_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.property.link">link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroid">DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroid</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `button_action`<sup>Required</sup> <a name="button_action" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.property.buttonAction"></a>

```python
button_action: str
```

- *Type:* str

---

##### `link`<sup>Required</sup> <a name="link" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.property.link"></a>

```python
link: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroid
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroid">DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroid</a>

---


### DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference <a name="DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_pinpoint_in_app_template

dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.backgroundColor">background_color</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.borderRadius">border_radius</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.buttonAction">button_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.link">link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.text">text</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.textColor">text_color</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfig">DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `background_color`<sup>Required</sup> <a name="background_color" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.backgroundColor"></a>

```python
background_color: str
```

- *Type:* str

---

##### `border_radius`<sup>Required</sup> <a name="border_radius" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.borderRadius"></a>

```python
border_radius: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `button_action`<sup>Required</sup> <a name="button_action" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.buttonAction"></a>

```python
button_action: str
```

- *Type:* str

---

##### `link`<sup>Required</sup> <a name="link" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.link"></a>

```python
link: str
```

- *Type:* str

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.text"></a>

```python
text: str
```

- *Type:* str

---

##### `text_color`<sup>Required</sup> <a name="text_color" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.textColor"></a>

```python
text_color: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfig">DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfig</a>

---


### DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference <a name="DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_pinpoint_in_app_template

dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.property.buttonAction">button_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.property.link">link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIos">DataAwsccPinpointInAppTemplateContentPrimaryBtnIos</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `button_action`<sup>Required</sup> <a name="button_action" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.property.buttonAction"></a>

```python
button_action: str
```

- *Type:* str

---

##### `link`<sup>Required</sup> <a name="link" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.property.link"></a>

```python
link: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccPinpointInAppTemplateContentPrimaryBtnIos
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIos">DataAwsccPinpointInAppTemplateContentPrimaryBtnIos</a>

---


### DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference <a name="DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_pinpoint_in_app_template

dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.property.android">android</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference">DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.property.defaultConfig">default_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference">DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.property.ios">ios</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference">DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.property.web">web</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference">DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtn">DataAwsccPinpointInAppTemplateContentPrimaryBtn</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `android`<sup>Required</sup> <a name="android" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.property.android"></a>

```python
android: DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference">DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference</a>

---

##### `default_config`<sup>Required</sup> <a name="default_config" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.property.defaultConfig"></a>

```python
default_config: DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference">DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference</a>

---

##### `ios`<sup>Required</sup> <a name="ios" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.property.ios"></a>

```python
ios: DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference">DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference</a>

---

##### `web`<sup>Required</sup> <a name="web" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.property.web"></a>

```python
web: DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference">DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccPinpointInAppTemplateContentPrimaryBtn
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtn">DataAwsccPinpointInAppTemplateContentPrimaryBtn</a>

---


### DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference <a name="DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_pinpoint_in_app_template

dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.property.buttonAction">button_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.property.link">link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWeb">DataAwsccPinpointInAppTemplateContentPrimaryBtnWeb</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `button_action`<sup>Required</sup> <a name="button_action" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.property.buttonAction"></a>

```python
button_action: str
```

- *Type:* str

---

##### `link`<sup>Required</sup> <a name="link" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.property.link"></a>

```python
link: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccPinpointInAppTemplateContentPrimaryBtnWeb
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWeb">DataAwsccPinpointInAppTemplateContentPrimaryBtnWeb</a>

---


### DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference <a name="DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_pinpoint_in_app_template

dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.property.buttonAction">button_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.property.link">link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroid">DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroid</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `button_action`<sup>Required</sup> <a name="button_action" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.property.buttonAction"></a>

```python
button_action: str
```

- *Type:* str

---

##### `link`<sup>Required</sup> <a name="link" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.property.link"></a>

```python
link: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroid
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroid">DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroid</a>

---


### DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference <a name="DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_pinpoint_in_app_template

dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.backgroundColor">background_color</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.borderRadius">border_radius</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.buttonAction">button_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.link">link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.text">text</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.textColor">text_color</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfig">DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `background_color`<sup>Required</sup> <a name="background_color" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.backgroundColor"></a>

```python
background_color: str
```

- *Type:* str

---

##### `border_radius`<sup>Required</sup> <a name="border_radius" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.borderRadius"></a>

```python
border_radius: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `button_action`<sup>Required</sup> <a name="button_action" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.buttonAction"></a>

```python
button_action: str
```

- *Type:* str

---

##### `link`<sup>Required</sup> <a name="link" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.link"></a>

```python
link: str
```

- *Type:* str

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.text"></a>

```python
text: str
```

- *Type:* str

---

##### `text_color`<sup>Required</sup> <a name="text_color" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.textColor"></a>

```python
text_color: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfig">DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfig</a>

---


### DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference <a name="DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_pinpoint_in_app_template

dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.property.buttonAction">button_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.property.link">link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIos">DataAwsccPinpointInAppTemplateContentSecondaryBtnIos</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `button_action`<sup>Required</sup> <a name="button_action" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.property.buttonAction"></a>

```python
button_action: str
```

- *Type:* str

---

##### `link`<sup>Required</sup> <a name="link" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.property.link"></a>

```python
link: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccPinpointInAppTemplateContentSecondaryBtnIos
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIos">DataAwsccPinpointInAppTemplateContentSecondaryBtnIos</a>

---


### DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference <a name="DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_pinpoint_in_app_template

dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.property.android">android</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference">DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.property.defaultConfig">default_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference">DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.property.ios">ios</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference">DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.property.web">web</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference">DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtn">DataAwsccPinpointInAppTemplateContentSecondaryBtn</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `android`<sup>Required</sup> <a name="android" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.property.android"></a>

```python
android: DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference">DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference</a>

---

##### `default_config`<sup>Required</sup> <a name="default_config" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.property.defaultConfig"></a>

```python
default_config: DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference">DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference</a>

---

##### `ios`<sup>Required</sup> <a name="ios" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.property.ios"></a>

```python
ios: DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference">DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference</a>

---

##### `web`<sup>Required</sup> <a name="web" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.property.web"></a>

```python
web: DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference">DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccPinpointInAppTemplateContentSecondaryBtn
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtn">DataAwsccPinpointInAppTemplateContentSecondaryBtn</a>

---


### DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference <a name="DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_pinpoint_in_app_template

dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.property.buttonAction">button_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.property.link">link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWeb">DataAwsccPinpointInAppTemplateContentSecondaryBtnWeb</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `button_action`<sup>Required</sup> <a name="button_action" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.property.buttonAction"></a>

```python
button_action: str
```

- *Type:* str

---

##### `link`<sup>Required</sup> <a name="link" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.property.link"></a>

```python
link: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccPinpointInAppTemplateContentSecondaryBtnWeb
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWeb">DataAwsccPinpointInAppTemplateContentSecondaryBtnWeb</a>

---



