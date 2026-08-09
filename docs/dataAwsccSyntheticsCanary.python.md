# `dataAwsccSyntheticsCanary` Submodule <a name="`dataAwsccSyntheticsCanary` Submodule" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccSyntheticsCanary <a name="DataAwsccSyntheticsCanary" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/synthetics_canary awscc_synthetics_canary}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_synthetics_canary

dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/synthetics_canary#id DataAwsccSyntheticsCanary#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccSyntheticsCanary resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_synthetics_canary

dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_synthetics_canary

dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_synthetics_canary

dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_synthetics_canary

dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccSyntheticsCanary resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccSyntheticsCanary to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccSyntheticsCanary that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/synthetics_canary#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccSyntheticsCanary to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.artifactConfig">artifact_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference">DataAwsccSyntheticsCanaryArtifactConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.artifactS3Location">artifact_s3_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.browserConfigs">browser_configs</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsList">DataAwsccSyntheticsCanaryBrowserConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.canaryId">canary_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.code">code</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference">DataAwsccSyntheticsCanaryCodeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.deleteLambdaResourcesOnCanaryDeletion">delete_lambda_resources_on_canary_deletion</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.dryRunAndUpdate">dry_run_and_update</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.executionRoleArn">execution_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.failureRetentionPeriod">failure_retention_period</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.provisionedResourceCleanup">provisioned_resource_cleanup</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.resourcesToReplicateTags">resources_to_replicate_tags</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.runConfig">run_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference">DataAwsccSyntheticsCanaryRunConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.runtimeVersion">runtime_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.schedule">schedule</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference">DataAwsccSyntheticsCanaryScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.startCanaryAfterCreation">start_canary_after_creation</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.successRetentionPeriod">success_retention_period</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsList">DataAwsccSyntheticsCanaryTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.visualReference">visual_reference</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference">DataAwsccSyntheticsCanaryVisualReferenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.visualReferences">visual_references</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesList">DataAwsccSyntheticsCanaryVisualReferencesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.vpcConfig">vpc_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference">DataAwsccSyntheticsCanaryVpcConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `artifact_config`<sup>Required</sup> <a name="artifact_config" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.artifactConfig"></a>

```python
artifact_config: DataAwsccSyntheticsCanaryArtifactConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference">DataAwsccSyntheticsCanaryArtifactConfigOutputReference</a>

---

##### `artifact_s3_location`<sup>Required</sup> <a name="artifact_s3_location" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.artifactS3Location"></a>

```python
artifact_s3_location: str
```

- *Type:* str

---

##### `browser_configs`<sup>Required</sup> <a name="browser_configs" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.browserConfigs"></a>

```python
browser_configs: DataAwsccSyntheticsCanaryBrowserConfigsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsList">DataAwsccSyntheticsCanaryBrowserConfigsList</a>

---

##### `canary_id`<sup>Required</sup> <a name="canary_id" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.canaryId"></a>

```python
canary_id: str
```

- *Type:* str

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.code"></a>

```python
code: DataAwsccSyntheticsCanaryCodeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference">DataAwsccSyntheticsCanaryCodeOutputReference</a>

---

##### `delete_lambda_resources_on_canary_deletion`<sup>Required</sup> <a name="delete_lambda_resources_on_canary_deletion" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.deleteLambdaResourcesOnCanaryDeletion"></a>

```python
delete_lambda_resources_on_canary_deletion: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `dry_run_and_update`<sup>Required</sup> <a name="dry_run_and_update" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.dryRunAndUpdate"></a>

```python
dry_run_and_update: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `execution_role_arn`<sup>Required</sup> <a name="execution_role_arn" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.executionRoleArn"></a>

```python
execution_role_arn: str
```

- *Type:* str

---

##### `failure_retention_period`<sup>Required</sup> <a name="failure_retention_period" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.failureRetentionPeriod"></a>

```python
failure_retention_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `provisioned_resource_cleanup`<sup>Required</sup> <a name="provisioned_resource_cleanup" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.provisionedResourceCleanup"></a>

```python
provisioned_resource_cleanup: str
```

- *Type:* str

---

##### `resources_to_replicate_tags`<sup>Required</sup> <a name="resources_to_replicate_tags" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.resourcesToReplicateTags"></a>

```python
resources_to_replicate_tags: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `run_config`<sup>Required</sup> <a name="run_config" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.runConfig"></a>

```python
run_config: DataAwsccSyntheticsCanaryRunConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference">DataAwsccSyntheticsCanaryRunConfigOutputReference</a>

---

##### `runtime_version`<sup>Required</sup> <a name="runtime_version" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.runtimeVersion"></a>

```python
runtime_version: str
```

- *Type:* str

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.schedule"></a>

```python
schedule: DataAwsccSyntheticsCanaryScheduleOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference">DataAwsccSyntheticsCanaryScheduleOutputReference</a>

---

##### `start_canary_after_creation`<sup>Required</sup> <a name="start_canary_after_creation" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.startCanaryAfterCreation"></a>

```python
start_canary_after_creation: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `success_retention_period`<sup>Required</sup> <a name="success_retention_period" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.successRetentionPeriod"></a>

```python
success_retention_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.tags"></a>

```python
tags: DataAwsccSyntheticsCanaryTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsList">DataAwsccSyntheticsCanaryTagsList</a>

---

##### `visual_reference`<sup>Required</sup> <a name="visual_reference" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.visualReference"></a>

```python
visual_reference: DataAwsccSyntheticsCanaryVisualReferenceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference">DataAwsccSyntheticsCanaryVisualReferenceOutputReference</a>

---

##### `visual_references`<sup>Required</sup> <a name="visual_references" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.visualReferences"></a>

```python
visual_references: DataAwsccSyntheticsCanaryVisualReferencesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesList">DataAwsccSyntheticsCanaryVisualReferencesList</a>

---

##### `vpc_config`<sup>Required</sup> <a name="vpc_config" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.vpcConfig"></a>

```python
vpc_config: DataAwsccSyntheticsCanaryVpcConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference">DataAwsccSyntheticsCanaryVpcConfigOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccSyntheticsCanaryArtifactConfig <a name="DataAwsccSyntheticsCanaryArtifactConfig" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_synthetics_canary

dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfig()
```


### DataAwsccSyntheticsCanaryArtifactConfigS3Encryption <a name="DataAwsccSyntheticsCanaryArtifactConfigS3Encryption" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3Encryption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3Encryption.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_synthetics_canary

dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3Encryption()
```


### DataAwsccSyntheticsCanaryBrowserConfigs <a name="DataAwsccSyntheticsCanaryBrowserConfigs" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigs.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_synthetics_canary

dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigs()
```


### DataAwsccSyntheticsCanaryCode <a name="DataAwsccSyntheticsCanaryCode" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCode"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCode.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_synthetics_canary

dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCode()
```


### DataAwsccSyntheticsCanaryCodeDependencies <a name="DataAwsccSyntheticsCanaryCodeDependencies" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependencies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependencies.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_synthetics_canary

dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependencies()
```


### DataAwsccSyntheticsCanaryConfig <a name="DataAwsccSyntheticsCanaryConfig" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_synthetics_canary

dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/synthetics_canary#id DataAwsccSyntheticsCanary#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccSyntheticsCanaryRunConfig <a name="DataAwsccSyntheticsCanaryRunConfig" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_synthetics_canary

dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfig()
```


### DataAwsccSyntheticsCanarySchedule <a name="DataAwsccSyntheticsCanarySchedule" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanarySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanarySchedule.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_synthetics_canary

dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanarySchedule()
```


### DataAwsccSyntheticsCanaryScheduleRetryConfig <a name="DataAwsccSyntheticsCanaryScheduleRetryConfig" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_synthetics_canary

dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfig()
```


### DataAwsccSyntheticsCanaryTags <a name="DataAwsccSyntheticsCanaryTags" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_synthetics_canary

dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTags()
```


### DataAwsccSyntheticsCanaryVisualReference <a name="DataAwsccSyntheticsCanaryVisualReference" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReference"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_synthetics_canary

dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReference()
```


### DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshots <a name="DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshots" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshots"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshots.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_synthetics_canary

dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshots()
```


### DataAwsccSyntheticsCanaryVisualReferences <a name="DataAwsccSyntheticsCanaryVisualReferences" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferences"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferences.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_synthetics_canary

dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferences()
```


### DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshots <a name="DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshots" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshots"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshots.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_synthetics_canary

dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshots()
```


### DataAwsccSyntheticsCanaryVpcConfig <a name="DataAwsccSyntheticsCanaryVpcConfig" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_synthetics_canary

dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfig()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccSyntheticsCanaryArtifactConfigOutputReference <a name="DataAwsccSyntheticsCanaryArtifactConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_synthetics_canary

dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.property.s3Encryption">s3_encryption</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference">DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfig">DataAwsccSyntheticsCanaryArtifactConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `s3_encryption`<sup>Required</sup> <a name="s3_encryption" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.property.s3Encryption"></a>

```python
s3_encryption: DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference">DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSyntheticsCanaryArtifactConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfig">DataAwsccSyntheticsCanaryArtifactConfig</a>

---


### DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference <a name="DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_synthetics_canary

dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.property.encryptionMode">encryption_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3Encryption">DataAwsccSyntheticsCanaryArtifactConfigS3Encryption</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `encryption_mode`<sup>Required</sup> <a name="encryption_mode" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.property.encryptionMode"></a>

```python
encryption_mode: str
```

- *Type:* str

---

##### `kms_key_arn`<sup>Required</sup> <a name="kms_key_arn" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSyntheticsCanaryArtifactConfigS3Encryption
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3Encryption">DataAwsccSyntheticsCanaryArtifactConfigS3Encryption</a>

---


### DataAwsccSyntheticsCanaryBrowserConfigsList <a name="DataAwsccSyntheticsCanaryBrowserConfigsList" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_synthetics_canary

dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccSyntheticsCanaryBrowserConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccSyntheticsCanaryBrowserConfigsOutputReference <a name="DataAwsccSyntheticsCanaryBrowserConfigsOutputReference" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_synthetics_canary

dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.property.browserType">browser_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigs">DataAwsccSyntheticsCanaryBrowserConfigs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `browser_type`<sup>Required</sup> <a name="browser_type" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.property.browserType"></a>

```python
browser_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSyntheticsCanaryBrowserConfigs
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigs">DataAwsccSyntheticsCanaryBrowserConfigs</a>

---


### DataAwsccSyntheticsCanaryCodeDependenciesList <a name="DataAwsccSyntheticsCanaryCodeDependenciesList" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_synthetics_canary

dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccSyntheticsCanaryCodeDependenciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccSyntheticsCanaryCodeDependenciesOutputReference <a name="DataAwsccSyntheticsCanaryCodeDependenciesOutputReference" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_synthetics_canary

dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.property.reference">reference</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependencies">DataAwsccSyntheticsCanaryCodeDependencies</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `reference`<sup>Required</sup> <a name="reference" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.property.reference"></a>

```python
reference: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSyntheticsCanaryCodeDependencies
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependencies">DataAwsccSyntheticsCanaryCodeDependencies</a>

---


### DataAwsccSyntheticsCanaryCodeOutputReference <a name="DataAwsccSyntheticsCanaryCodeOutputReference" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_synthetics_canary

dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.property.blueprintTypes">blueprint_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.property.dependencies">dependencies</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesList">DataAwsccSyntheticsCanaryCodeDependenciesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.property.handler">handler</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.property.s3Bucket">s3_bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.property.s3Key">s3_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.property.s3ObjectVersion">s3_object_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.property.script">script</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.property.sourceLocationArn">source_location_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCode">DataAwsccSyntheticsCanaryCode</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `blueprint_types`<sup>Required</sup> <a name="blueprint_types" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.property.blueprintTypes"></a>

```python
blueprint_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `dependencies`<sup>Required</sup> <a name="dependencies" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.property.dependencies"></a>

```python
dependencies: DataAwsccSyntheticsCanaryCodeDependenciesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesList">DataAwsccSyntheticsCanaryCodeDependenciesList</a>

---

##### `handler`<sup>Required</sup> <a name="handler" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.property.handler"></a>

```python
handler: str
```

- *Type:* str

---

##### `s3_bucket`<sup>Required</sup> <a name="s3_bucket" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.property.s3Bucket"></a>

```python
s3_bucket: str
```

- *Type:* str

---

##### `s3_key`<sup>Required</sup> <a name="s3_key" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.property.s3Key"></a>

```python
s3_key: str
```

- *Type:* str

---

##### `s3_object_version`<sup>Required</sup> <a name="s3_object_version" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.property.s3ObjectVersion"></a>

```python
s3_object_version: str
```

- *Type:* str

---

##### `script`<sup>Required</sup> <a name="script" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.property.script"></a>

```python
script: str
```

- *Type:* str

---

##### `source_location_arn`<sup>Required</sup> <a name="source_location_arn" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.property.sourceLocationArn"></a>

```python
source_location_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSyntheticsCanaryCode
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCode">DataAwsccSyntheticsCanaryCode</a>

---


### DataAwsccSyntheticsCanaryRunConfigOutputReference <a name="DataAwsccSyntheticsCanaryRunConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_synthetics_canary

dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.property.activeTracing">active_tracing</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.property.environmentVariables">environment_variables</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.property.ephemeralStorage">ephemeral_storage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.property.memoryInMb">memory_in_mb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.property.timeoutInSeconds">timeout_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfig">DataAwsccSyntheticsCanaryRunConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `active_tracing`<sup>Required</sup> <a name="active_tracing" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.property.activeTracing"></a>

```python
active_tracing: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `environment_variables`<sup>Required</sup> <a name="environment_variables" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.property.environmentVariables"></a>

```python
environment_variables: StringMap
```

- *Type:* cdktn.StringMap

---

##### `ephemeral_storage`<sup>Required</sup> <a name="ephemeral_storage" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.property.ephemeralStorage"></a>

```python
ephemeral_storage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `memory_in_mb`<sup>Required</sup> <a name="memory_in_mb" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.property.memoryInMb"></a>

```python
memory_in_mb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeout_in_seconds`<sup>Required</sup> <a name="timeout_in_seconds" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.property.timeoutInSeconds"></a>

```python
timeout_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSyntheticsCanaryRunConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfig">DataAwsccSyntheticsCanaryRunConfig</a>

---


### DataAwsccSyntheticsCanaryScheduleOutputReference <a name="DataAwsccSyntheticsCanaryScheduleOutputReference" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_synthetics_canary

dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.property.durationInSeconds">duration_in_seconds</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.property.retryConfig">retry_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference">DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanarySchedule">DataAwsccSyntheticsCanarySchedule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `duration_in_seconds`<sup>Required</sup> <a name="duration_in_seconds" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.property.durationInSeconds"></a>

```python
duration_in_seconds: str
```

- *Type:* str

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `retry_config`<sup>Required</sup> <a name="retry_config" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.property.retryConfig"></a>

```python
retry_config: DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference">DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSyntheticsCanarySchedule
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanarySchedule">DataAwsccSyntheticsCanarySchedule</a>

---


### DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference <a name="DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_synthetics_canary

dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.property.maxRetries">max_retries</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfig">DataAwsccSyntheticsCanaryScheduleRetryConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_retries`<sup>Required</sup> <a name="max_retries" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.property.maxRetries"></a>

```python
max_retries: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSyntheticsCanaryScheduleRetryConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfig">DataAwsccSyntheticsCanaryScheduleRetryConfig</a>

---


### DataAwsccSyntheticsCanaryTagsList <a name="DataAwsccSyntheticsCanaryTagsList" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_synthetics_canary

dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccSyntheticsCanaryTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccSyntheticsCanaryTagsOutputReference <a name="DataAwsccSyntheticsCanaryTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_synthetics_canary

dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTags">DataAwsccSyntheticsCanaryTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSyntheticsCanaryTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTags">DataAwsccSyntheticsCanaryTags</a>

---


### DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsList <a name="DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsList" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_synthetics_canary

dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference <a name="DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_synthetics_canary

dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.property.ignoreCoordinates">ignore_coordinates</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.property.screenshotName">screenshot_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshots">DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshots</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ignore_coordinates`<sup>Required</sup> <a name="ignore_coordinates" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.property.ignoreCoordinates"></a>

```python
ignore_coordinates: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `screenshot_name`<sup>Required</sup> <a name="screenshot_name" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.property.screenshotName"></a>

```python
screenshot_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshots
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshots">DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshots</a>

---


### DataAwsccSyntheticsCanaryVisualReferenceOutputReference <a name="DataAwsccSyntheticsCanaryVisualReferenceOutputReference" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_synthetics_canary

dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.property.baseCanaryRunId">base_canary_run_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.property.baseScreenshots">base_screenshots</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsList">DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.property.browserType">browser_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReference">DataAwsccSyntheticsCanaryVisualReference</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `base_canary_run_id`<sup>Required</sup> <a name="base_canary_run_id" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.property.baseCanaryRunId"></a>

```python
base_canary_run_id: str
```

- *Type:* str

---

##### `base_screenshots`<sup>Required</sup> <a name="base_screenshots" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.property.baseScreenshots"></a>

```python
base_screenshots: DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsList">DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsList</a>

---

##### `browser_type`<sup>Required</sup> <a name="browser_type" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.property.browserType"></a>

```python
browser_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSyntheticsCanaryVisualReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReference">DataAwsccSyntheticsCanaryVisualReference</a>

---


### DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsList <a name="DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsList" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_synthetics_canary

dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference <a name="DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_synthetics_canary

dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.property.ignoreCoordinates">ignore_coordinates</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.property.screenshotName">screenshot_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshots">DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshots</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ignore_coordinates`<sup>Required</sup> <a name="ignore_coordinates" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.property.ignoreCoordinates"></a>

```python
ignore_coordinates: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `screenshot_name`<sup>Required</sup> <a name="screenshot_name" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.property.screenshotName"></a>

```python
screenshot_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshots
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshots">DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshots</a>

---


### DataAwsccSyntheticsCanaryVisualReferencesList <a name="DataAwsccSyntheticsCanaryVisualReferencesList" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_synthetics_canary

dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccSyntheticsCanaryVisualReferencesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccSyntheticsCanaryVisualReferencesOutputReference <a name="DataAwsccSyntheticsCanaryVisualReferencesOutputReference" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_synthetics_canary

dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.property.baseCanaryRunId">base_canary_run_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.property.baseScreenshots">base_screenshots</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsList">DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.property.browserType">browser_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferences">DataAwsccSyntheticsCanaryVisualReferences</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `base_canary_run_id`<sup>Required</sup> <a name="base_canary_run_id" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.property.baseCanaryRunId"></a>

```python
base_canary_run_id: str
```

- *Type:* str

---

##### `base_screenshots`<sup>Required</sup> <a name="base_screenshots" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.property.baseScreenshots"></a>

```python
base_screenshots: DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsList">DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsList</a>

---

##### `browser_type`<sup>Required</sup> <a name="browser_type" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.property.browserType"></a>

```python
browser_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSyntheticsCanaryVisualReferences
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferences">DataAwsccSyntheticsCanaryVisualReferences</a>

---


### DataAwsccSyntheticsCanaryVpcConfigOutputReference <a name="DataAwsccSyntheticsCanaryVpcConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_synthetics_canary

dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.property.ipv6AllowedForDualStack">ipv6_allowed_for_dual_stack</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.property.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.property.vpcId">vpc_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfig">DataAwsccSyntheticsCanaryVpcConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ipv6_allowed_for_dual_stack`<sup>Required</sup> <a name="ipv6_allowed_for_dual_stack" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.property.ipv6AllowedForDualStack"></a>

```python
ipv6_allowed_for_dual_stack: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `security_group_ids`<sup>Required</sup> <a name="security_group_ids" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_ids`<sup>Required</sup> <a name="subnet_ids" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.property.subnetIds"></a>

```python
subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSyntheticsCanaryVpcConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfig">DataAwsccSyntheticsCanaryVpcConfig</a>

---



