# `dataAwsccPersonalizeMetricAttribution` Submodule <a name="`dataAwsccPersonalizeMetricAttribution` Submodule" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccPersonalizeMetricAttribution <a name="DataAwsccPersonalizeMetricAttribution" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/personalize_metric_attribution awscc_personalize_metric_attribution}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_personalize_metric_attribution

dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/personalize_metric_attribution#id DataAwsccPersonalizeMetricAttribution#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccPersonalizeMetricAttribution resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_personalize_metric_attribution

dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_personalize_metric_attribution

dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_personalize_metric_attribution

dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_personalize_metric_attribution

dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccPersonalizeMetricAttribution resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccPersonalizeMetricAttribution to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccPersonalizeMetricAttribution that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/personalize_metric_attribution#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccPersonalizeMetricAttribution to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.property.datasetGroupArn">dataset_group_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.property.metricAttributionArn">metric_attribution_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.property.metrics">metrics</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsList">DataAwsccPersonalizeMetricAttributionMetricsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.property.metricsOutputConfig">metrics_output_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigOutputReference">DataAwsccPersonalizeMetricAttributionMetricsOutputConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `dataset_group_arn`<sup>Required</sup> <a name="dataset_group_arn" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.property.datasetGroupArn"></a>

```python
dataset_group_arn: str
```

- *Type:* str

---

##### `metric_attribution_arn`<sup>Required</sup> <a name="metric_attribution_arn" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.property.metricAttributionArn"></a>

```python
metric_attribution_arn: str
```

- *Type:* str

---

##### `metrics`<sup>Required</sup> <a name="metrics" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.property.metrics"></a>

```python
metrics: DataAwsccPersonalizeMetricAttributionMetricsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsList">DataAwsccPersonalizeMetricAttributionMetricsList</a>

---

##### `metrics_output_config`<sup>Required</sup> <a name="metrics_output_config" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.property.metricsOutputConfig"></a>

```python
metrics_output_config: DataAwsccPersonalizeMetricAttributionMetricsOutputConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigOutputReference">DataAwsccPersonalizeMetricAttributionMetricsOutputConfigOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttribution.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccPersonalizeMetricAttributionConfig <a name="DataAwsccPersonalizeMetricAttributionConfig" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_personalize_metric_attribution

dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/personalize_metric_attribution#id DataAwsccPersonalizeMetricAttribution#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccPersonalizeMetricAttributionMetrics <a name="DataAwsccPersonalizeMetricAttributionMetrics" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetrics.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_personalize_metric_attribution

dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetrics()
```


### DataAwsccPersonalizeMetricAttributionMetricsOutputConfig <a name="DataAwsccPersonalizeMetricAttributionMetricsOutputConfig" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_personalize_metric_attribution

dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfig()
```


### DataAwsccPersonalizeMetricAttributionMetricsOutputConfigS3DataDestination <a name="DataAwsccPersonalizeMetricAttributionMetricsOutputConfigS3DataDestination" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigS3DataDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigS3DataDestination.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_personalize_metric_attribution

dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigS3DataDestination()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccPersonalizeMetricAttributionMetricsList <a name="DataAwsccPersonalizeMetricAttributionMetricsList" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_personalize_metric_attribution

dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccPersonalizeMetricAttributionMetricsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccPersonalizeMetricAttributionMetricsOutputConfigOutputReference <a name="DataAwsccPersonalizeMetricAttributionMetricsOutputConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_personalize_metric_attribution

dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigOutputReference.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigOutputReference.property.s3DataDestination">s3_data_destination</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference">DataAwsccPersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfig">DataAwsccPersonalizeMetricAttributionMetricsOutputConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigOutputReference.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `s3_data_destination`<sup>Required</sup> <a name="s3_data_destination" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigOutputReference.property.s3DataDestination"></a>

```python
s3_data_destination: DataAwsccPersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference">DataAwsccPersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccPersonalizeMetricAttributionMetricsOutputConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfig">DataAwsccPersonalizeMetricAttributionMetricsOutputConfig</a>

---


### DataAwsccPersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference <a name="DataAwsccPersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_personalize_metric_attribution

dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigS3DataDestination">DataAwsccPersonalizeMetricAttributionMetricsOutputConfigS3DataDestination</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kms_key_arn`<sup>Required</sup> <a name="kms_key_arn" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccPersonalizeMetricAttributionMetricsOutputConfigS3DataDestination
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputConfigS3DataDestination">DataAwsccPersonalizeMetricAttributionMetricsOutputConfigS3DataDestination</a>

---


### DataAwsccPersonalizeMetricAttributionMetricsOutputReference <a name="DataAwsccPersonalizeMetricAttributionMetricsOutputReference" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_personalize_metric_attribution

dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputReference.property.eventType">event_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputReference.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputReference.property.metricName">metric_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetrics">DataAwsccPersonalizeMetricAttributionMetrics</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `event_type`<sup>Required</sup> <a name="event_type" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputReference.property.eventType"></a>

```python
event_type: str
```

- *Type:* str

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputReference.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `metric_name`<sup>Required</sup> <a name="metric_name" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputReference.property.metricName"></a>

```python
metric_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetricsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccPersonalizeMetricAttributionMetrics
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPersonalizeMetricAttribution.DataAwsccPersonalizeMetricAttributionMetrics">DataAwsccPersonalizeMetricAttributionMetrics</a>

---



