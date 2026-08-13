# `dataAwsccEventsRule` Submodule <a name="`dataAwsccEventsRule` Submodule" id="@cdktn/provider-awscc.dataAwsccEventsRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccEventsRule <a name="DataAwsccEventsRule" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/events_rule awscc_events_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_events_rule

dataAwsccEventsRule.DataAwsccEventsRule(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/events_rule#id DataAwsccEventsRule#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccEventsRule resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_events_rule

dataAwsccEventsRule.DataAwsccEventsRule.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_events_rule

dataAwsccEventsRule.DataAwsccEventsRule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_events_rule

dataAwsccEventsRule.DataAwsccEventsRule.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_events_rule

dataAwsccEventsRule.DataAwsccEventsRule.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccEventsRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccEventsRule to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccEventsRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/events_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccEventsRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.property.eventBusName">event_bus_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.property.eventPattern">event_pattern</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.property.scheduleExpression">schedule_expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsList">DataAwsccEventsRuleTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.property.targets">targets</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsList">DataAwsccEventsRuleTargetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `event_bus_name`<sup>Required</sup> <a name="event_bus_name" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.property.eventBusName"></a>

```python
event_bus_name: str
```

- *Type:* str

---

##### `event_pattern`<sup>Required</sup> <a name="event_pattern" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.property.eventPattern"></a>

```python
event_pattern: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `schedule_expression`<sup>Required</sup> <a name="schedule_expression" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.property.scheduleExpression"></a>

```python
schedule_expression: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.property.tags"></a>

```python
tags: DataAwsccEventsRuleTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsList">DataAwsccEventsRuleTagsList</a>

---

##### `targets`<sup>Required</sup> <a name="targets" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.property.targets"></a>

```python
targets: DataAwsccEventsRuleTargetsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsList">DataAwsccEventsRuleTargetsList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccEventsRuleConfig <a name="DataAwsccEventsRuleConfig" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_events_rule

dataAwsccEventsRule.DataAwsccEventsRuleConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/events_rule#id DataAwsccEventsRule#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccEventsRuleTags <a name="DataAwsccEventsRuleTags" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_events_rule

dataAwsccEventsRule.DataAwsccEventsRuleTags()
```


### DataAwsccEventsRuleTargets <a name="DataAwsccEventsRuleTargets" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargets.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_events_rule

dataAwsccEventsRule.DataAwsccEventsRuleTargets()
```


### DataAwsccEventsRuleTargetsAppSyncParameters <a name="DataAwsccEventsRuleTargetsAppSyncParameters" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsAppSyncParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsAppSyncParameters.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_events_rule

dataAwsccEventsRule.DataAwsccEventsRuleTargetsAppSyncParameters()
```


### DataAwsccEventsRuleTargetsBatchParameters <a name="DataAwsccEventsRuleTargetsBatchParameters" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParameters.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_events_rule

dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParameters()
```


### DataAwsccEventsRuleTargetsBatchParametersArrayProperties <a name="DataAwsccEventsRuleTargetsBatchParametersArrayProperties" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersArrayProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersArrayProperties.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_events_rule

dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersArrayProperties()
```


### DataAwsccEventsRuleTargetsBatchParametersRetryStrategy <a name="DataAwsccEventsRuleTargetsBatchParametersRetryStrategy" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersRetryStrategy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersRetryStrategy.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_events_rule

dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersRetryStrategy()
```


### DataAwsccEventsRuleTargetsDeadLetterConfig <a name="DataAwsccEventsRuleTargetsDeadLetterConfig" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsDeadLetterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsDeadLetterConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_events_rule

dataAwsccEventsRule.DataAwsccEventsRuleTargetsDeadLetterConfig()
```


### DataAwsccEventsRuleTargetsEcsParameters <a name="DataAwsccEventsRuleTargetsEcsParameters" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParameters.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_events_rule

dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParameters()
```


### DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategy <a name="DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategy" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategy.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_events_rule

dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategy()
```


### DataAwsccEventsRuleTargetsEcsParametersNetworkConfiguration <a name="DataAwsccEventsRuleTargetsEcsParametersNetworkConfiguration" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_events_rule

dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfiguration()
```


### DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfiguration <a name="DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfiguration" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_events_rule

dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfiguration()
```


### DataAwsccEventsRuleTargetsEcsParametersPlacementConstraints <a name="DataAwsccEventsRuleTargetsEcsParametersPlacementConstraints" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraints"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraints.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_events_rule

dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraints()
```


### DataAwsccEventsRuleTargetsEcsParametersPlacementStrategies <a name="DataAwsccEventsRuleTargetsEcsParametersPlacementStrategies" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategies.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_events_rule

dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategies()
```


### DataAwsccEventsRuleTargetsEcsParametersTagListStruct <a name="DataAwsccEventsRuleTargetsEcsParametersTagListStruct" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStruct.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_events_rule

dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStruct()
```


### DataAwsccEventsRuleTargetsHttpParameters <a name="DataAwsccEventsRuleTargetsHttpParameters" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsHttpParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsHttpParameters.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_events_rule

dataAwsccEventsRule.DataAwsccEventsRuleTargetsHttpParameters()
```


### DataAwsccEventsRuleTargetsInputTransformer <a name="DataAwsccEventsRuleTargetsInputTransformer" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsInputTransformer"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsInputTransformer.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_events_rule

dataAwsccEventsRule.DataAwsccEventsRuleTargetsInputTransformer()
```


### DataAwsccEventsRuleTargetsKinesisParameters <a name="DataAwsccEventsRuleTargetsKinesisParameters" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsKinesisParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsKinesisParameters.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_events_rule

dataAwsccEventsRule.DataAwsccEventsRuleTargetsKinesisParameters()
```


### DataAwsccEventsRuleTargetsRedshiftDataParameters <a name="DataAwsccEventsRuleTargetsRedshiftDataParameters" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParameters.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_events_rule

dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParameters()
```


### DataAwsccEventsRuleTargetsRetryPolicy <a name="DataAwsccEventsRuleTargetsRetryPolicy" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRetryPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRetryPolicy.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_events_rule

dataAwsccEventsRule.DataAwsccEventsRuleTargetsRetryPolicy()
```


### DataAwsccEventsRuleTargetsRunCommandParameters <a name="DataAwsccEventsRuleTargetsRunCommandParameters" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParameters.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_events_rule

dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParameters()
```


### DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargets <a name="DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargets" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargets.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_events_rule

dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargets()
```


### DataAwsccEventsRuleTargetsSageMakerPipelineParameters <a name="DataAwsccEventsRuleTargetsSageMakerPipelineParameters" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParameters.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_events_rule

dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParameters()
```


### DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStruct <a name="DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStruct" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStruct.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_events_rule

dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStruct()
```


### DataAwsccEventsRuleTargetsSqsParameters <a name="DataAwsccEventsRuleTargetsSqsParameters" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSqsParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSqsParameters.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_events_rule

dataAwsccEventsRule.DataAwsccEventsRuleTargetsSqsParameters()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccEventsRuleTagsList <a name="DataAwsccEventsRuleTagsList" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_events_rule

dataAwsccEventsRule.DataAwsccEventsRuleTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccEventsRuleTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccEventsRuleTagsOutputReference <a name="DataAwsccEventsRuleTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_events_rule

dataAwsccEventsRule.DataAwsccEventsRuleTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTags">DataAwsccEventsRuleTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEventsRuleTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTags">DataAwsccEventsRuleTags</a>

---


### DataAwsccEventsRuleTargetsAppSyncParametersOutputReference <a name="DataAwsccEventsRuleTargetsAppSyncParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsAppSyncParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsAppSyncParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_events_rule

dataAwsccEventsRule.DataAwsccEventsRuleTargetsAppSyncParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsAppSyncParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsAppSyncParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsAppSyncParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsAppSyncParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsAppSyncParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsAppSyncParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsAppSyncParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsAppSyncParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsAppSyncParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsAppSyncParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsAppSyncParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsAppSyncParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsAppSyncParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsAppSyncParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsAppSyncParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsAppSyncParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsAppSyncParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsAppSyncParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsAppSyncParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsAppSyncParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsAppSyncParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsAppSyncParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsAppSyncParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsAppSyncParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsAppSyncParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsAppSyncParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsAppSyncParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsAppSyncParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsAppSyncParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsAppSyncParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsAppSyncParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsAppSyncParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsAppSyncParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsAppSyncParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsAppSyncParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsAppSyncParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsAppSyncParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsAppSyncParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsAppSyncParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsAppSyncParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsAppSyncParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsAppSyncParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsAppSyncParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsAppSyncParametersOutputReference.property.graphQlOperation">graph_ql_operation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsAppSyncParametersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsAppSyncParameters">DataAwsccEventsRuleTargetsAppSyncParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsAppSyncParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsAppSyncParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `graph_ql_operation`<sup>Required</sup> <a name="graph_ql_operation" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsAppSyncParametersOutputReference.property.graphQlOperation"></a>

```python
graph_ql_operation: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsAppSyncParametersOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEventsRuleTargetsAppSyncParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsAppSyncParameters">DataAwsccEventsRuleTargetsAppSyncParameters</a>

---


### DataAwsccEventsRuleTargetsBatchParametersArrayPropertiesOutputReference <a name="DataAwsccEventsRuleTargetsBatchParametersArrayPropertiesOutputReference" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersArrayPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersArrayPropertiesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_events_rule

dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersArrayPropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersArrayPropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersArrayPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersArrayPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersArrayPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersArrayPropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersArrayPropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersArrayPropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersArrayPropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersArrayPropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersArrayPropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersArrayPropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersArrayPropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersArrayPropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersArrayPropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersArrayPropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersArrayPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersArrayPropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersArrayPropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersArrayPropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersArrayPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersArrayPropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersArrayPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersArrayPropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersArrayPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersArrayPropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersArrayPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersArrayPropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersArrayPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersArrayPropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersArrayPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersArrayPropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersArrayPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersArrayPropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersArrayPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersArrayPropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersArrayPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersArrayPropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersArrayPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersArrayPropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersArrayPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersArrayPropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersArrayPropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersArrayPropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersArrayPropertiesOutputReference.property.size">size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersArrayPropertiesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersArrayProperties">DataAwsccEventsRuleTargetsBatchParametersArrayProperties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersArrayPropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersArrayPropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersArrayPropertiesOutputReference.property.size"></a>

```python
size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersArrayPropertiesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEventsRuleTargetsBatchParametersArrayProperties
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersArrayProperties">DataAwsccEventsRuleTargetsBatchParametersArrayProperties</a>

---


### DataAwsccEventsRuleTargetsBatchParametersOutputReference <a name="DataAwsccEventsRuleTargetsBatchParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_events_rule

dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersOutputReference.property.arrayProperties">array_properties</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersArrayPropertiesOutputReference">DataAwsccEventsRuleTargetsBatchParametersArrayPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersOutputReference.property.jobDefinition">job_definition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersOutputReference.property.jobName">job_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersOutputReference.property.retryStrategy">retry_strategy</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersRetryStrategyOutputReference">DataAwsccEventsRuleTargetsBatchParametersRetryStrategyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParameters">DataAwsccEventsRuleTargetsBatchParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `array_properties`<sup>Required</sup> <a name="array_properties" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersOutputReference.property.arrayProperties"></a>

```python
array_properties: DataAwsccEventsRuleTargetsBatchParametersArrayPropertiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersArrayPropertiesOutputReference">DataAwsccEventsRuleTargetsBatchParametersArrayPropertiesOutputReference</a>

---

##### `job_definition`<sup>Required</sup> <a name="job_definition" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersOutputReference.property.jobDefinition"></a>

```python
job_definition: str
```

- *Type:* str

---

##### `job_name`<sup>Required</sup> <a name="job_name" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersOutputReference.property.jobName"></a>

```python
job_name: str
```

- *Type:* str

---

##### `retry_strategy`<sup>Required</sup> <a name="retry_strategy" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersOutputReference.property.retryStrategy"></a>

```python
retry_strategy: DataAwsccEventsRuleTargetsBatchParametersRetryStrategyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersRetryStrategyOutputReference">DataAwsccEventsRuleTargetsBatchParametersRetryStrategyOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEventsRuleTargetsBatchParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParameters">DataAwsccEventsRuleTargetsBatchParameters</a>

---


### DataAwsccEventsRuleTargetsBatchParametersRetryStrategyOutputReference <a name="DataAwsccEventsRuleTargetsBatchParametersRetryStrategyOutputReference" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersRetryStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersRetryStrategyOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_events_rule

dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersRetryStrategyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersRetryStrategyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersRetryStrategyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersRetryStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersRetryStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersRetryStrategyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersRetryStrategyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersRetryStrategyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersRetryStrategyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersRetryStrategyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersRetryStrategyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersRetryStrategyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersRetryStrategyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersRetryStrategyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersRetryStrategyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersRetryStrategyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersRetryStrategyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersRetryStrategyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersRetryStrategyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersRetryStrategyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersRetryStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersRetryStrategyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersRetryStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersRetryStrategyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersRetryStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersRetryStrategyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersRetryStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersRetryStrategyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersRetryStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersRetryStrategyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersRetryStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersRetryStrategyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersRetryStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersRetryStrategyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersRetryStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersRetryStrategyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersRetryStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersRetryStrategyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersRetryStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersRetryStrategyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersRetryStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersRetryStrategyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersRetryStrategyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersRetryStrategyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersRetryStrategyOutputReference.property.attempts">attempts</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersRetryStrategyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersRetryStrategy">DataAwsccEventsRuleTargetsBatchParametersRetryStrategy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersRetryStrategyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersRetryStrategyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `attempts`<sup>Required</sup> <a name="attempts" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersRetryStrategyOutputReference.property.attempts"></a>

```python
attempts: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersRetryStrategyOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEventsRuleTargetsBatchParametersRetryStrategy
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersRetryStrategy">DataAwsccEventsRuleTargetsBatchParametersRetryStrategy</a>

---


### DataAwsccEventsRuleTargetsDeadLetterConfigOutputReference <a name="DataAwsccEventsRuleTargetsDeadLetterConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsDeadLetterConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsDeadLetterConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_events_rule

dataAwsccEventsRule.DataAwsccEventsRuleTargetsDeadLetterConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsDeadLetterConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsDeadLetterConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsDeadLetterConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsDeadLetterConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsDeadLetterConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsDeadLetterConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsDeadLetterConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsDeadLetterConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsDeadLetterConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsDeadLetterConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsDeadLetterConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsDeadLetterConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsDeadLetterConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsDeadLetterConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsDeadLetterConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsDeadLetterConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsDeadLetterConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsDeadLetterConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsDeadLetterConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsDeadLetterConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsDeadLetterConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsDeadLetterConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsDeadLetterConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsDeadLetterConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsDeadLetterConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsDeadLetterConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsDeadLetterConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsDeadLetterConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsDeadLetterConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsDeadLetterConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsDeadLetterConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsDeadLetterConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsDeadLetterConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsDeadLetterConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsDeadLetterConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsDeadLetterConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsDeadLetterConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsDeadLetterConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsDeadLetterConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsDeadLetterConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsDeadLetterConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsDeadLetterConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsDeadLetterConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsDeadLetterConfigOutputReference.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsDeadLetterConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsDeadLetterConfig">DataAwsccEventsRuleTargetsDeadLetterConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsDeadLetterConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsDeadLetterConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsDeadLetterConfigOutputReference.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsDeadLetterConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEventsRuleTargetsDeadLetterConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsDeadLetterConfig">DataAwsccEventsRuleTargetsDeadLetterConfig</a>

---


### DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyList <a name="DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyList" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_events_rule

dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference <a name="DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_events_rule

dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.property.base">base</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.property.capacityProvider">capacity_provider</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.property.weight">weight</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategy">DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `base`<sup>Required</sup> <a name="base" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.property.base"></a>

```python
base: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `capacity_provider`<sup>Required</sup> <a name="capacity_provider" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.property.capacityProvider"></a>

```python
capacity_provider: str
```

- *Type:* str

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.property.weight"></a>

```python
weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategy
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategy">DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategy</a>

---


### DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference <a name="DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_events_rule

dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.property.assignPublicIp">assign_public_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.property.securityGroups">security_groups</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.property.subnets">subnets</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfiguration">DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `assign_public_ip`<sup>Required</sup> <a name="assign_public_ip" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.property.assignPublicIp"></a>

```python
assign_public_ip: str
```

- *Type:* str

---

##### `security_groups`<sup>Required</sup> <a name="security_groups" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.property.securityGroups"></a>

```python
security_groups: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.property.subnets"></a>

```python
subnets: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfiguration">DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfiguration</a>

---


### DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationOutputReference <a name="DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_events_rule

dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.property.awsVpcConfiguration">aws_vpc_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference">DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfiguration">DataAwsccEventsRuleTargetsEcsParametersNetworkConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `aws_vpc_configuration`<sup>Required</sup> <a name="aws_vpc_configuration" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.property.awsVpcConfiguration"></a>

```python
aws_vpc_configuration: DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference">DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEventsRuleTargetsEcsParametersNetworkConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfiguration">DataAwsccEventsRuleTargetsEcsParametersNetworkConfiguration</a>

---


### DataAwsccEventsRuleTargetsEcsParametersOutputReference <a name="DataAwsccEventsRuleTargetsEcsParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_events_rule

dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.property.capacityProviderStrategy">capacity_provider_strategy</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyList">DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.property.enableEcsManagedTags">enable_ecs_managed_tags</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.property.enableExecuteCommand">enable_execute_command</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.property.group">group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.property.launchType">launch_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.property.networkConfiguration">network_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationOutputReference">DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.property.placementConstraints">placement_constraints</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsList">DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.property.placementStrategies">placement_strategies</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesList">DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.property.platformVersion">platform_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.property.propagateTags">propagate_tags</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.property.referenceId">reference_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.property.tagList">tag_list</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructList">DataAwsccEventsRuleTargetsEcsParametersTagListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.property.taskCount">task_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.property.taskDefinitionArn">task_definition_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParameters">DataAwsccEventsRuleTargetsEcsParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `capacity_provider_strategy`<sup>Required</sup> <a name="capacity_provider_strategy" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.property.capacityProviderStrategy"></a>

```python
capacity_provider_strategy: DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyList">DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyList</a>

---

##### `enable_ecs_managed_tags`<sup>Required</sup> <a name="enable_ecs_managed_tags" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.property.enableEcsManagedTags"></a>

```python
enable_ecs_managed_tags: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `enable_execute_command`<sup>Required</sup> <a name="enable_execute_command" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.property.enableExecuteCommand"></a>

```python
enable_execute_command: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.property.group"></a>

```python
group: str
```

- *Type:* str

---

##### `launch_type`<sup>Required</sup> <a name="launch_type" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.property.launchType"></a>

```python
launch_type: str
```

- *Type:* str

---

##### `network_configuration`<sup>Required</sup> <a name="network_configuration" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.property.networkConfiguration"></a>

```python
network_configuration: DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationOutputReference">DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationOutputReference</a>

---

##### `placement_constraints`<sup>Required</sup> <a name="placement_constraints" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.property.placementConstraints"></a>

```python
placement_constraints: DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsList">DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsList</a>

---

##### `placement_strategies`<sup>Required</sup> <a name="placement_strategies" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.property.placementStrategies"></a>

```python
placement_strategies: DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesList">DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesList</a>

---

##### `platform_version`<sup>Required</sup> <a name="platform_version" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.property.platformVersion"></a>

```python
platform_version: str
```

- *Type:* str

---

##### `propagate_tags`<sup>Required</sup> <a name="propagate_tags" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.property.propagateTags"></a>

```python
propagate_tags: str
```

- *Type:* str

---

##### `reference_id`<sup>Required</sup> <a name="reference_id" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.property.referenceId"></a>

```python
reference_id: str
```

- *Type:* str

---

##### `tag_list`<sup>Required</sup> <a name="tag_list" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.property.tagList"></a>

```python
tag_list: DataAwsccEventsRuleTargetsEcsParametersTagListStructList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructList">DataAwsccEventsRuleTargetsEcsParametersTagListStructList</a>

---

##### `task_count`<sup>Required</sup> <a name="task_count" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.property.taskCount"></a>

```python
task_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `task_definition_arn`<sup>Required</sup> <a name="task_definition_arn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.property.taskDefinitionArn"></a>

```python
task_definition_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEventsRuleTargetsEcsParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParameters">DataAwsccEventsRuleTargetsEcsParameters</a>

---


### DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsList <a name="DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsList" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_events_rule

dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsOutputReference <a name="DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsOutputReference" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_events_rule

dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraints">DataAwsccEventsRuleTargetsEcsParametersPlacementConstraints</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEventsRuleTargetsEcsParametersPlacementConstraints
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraints">DataAwsccEventsRuleTargetsEcsParametersPlacementConstraints</a>

---


### DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesList <a name="DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesList" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_events_rule

dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesOutputReference <a name="DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesOutputReference" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_events_rule

dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.property.field">field</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategies">DataAwsccEventsRuleTargetsEcsParametersPlacementStrategies</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `field`<sup>Required</sup> <a name="field" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.property.field"></a>

```python
field: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEventsRuleTargetsEcsParametersPlacementStrategies
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategies">DataAwsccEventsRuleTargetsEcsParametersPlacementStrategies</a>

---


### DataAwsccEventsRuleTargetsEcsParametersTagListStructList <a name="DataAwsccEventsRuleTargetsEcsParametersTagListStructList" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_events_rule

dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccEventsRuleTargetsEcsParametersTagListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccEventsRuleTargetsEcsParametersTagListStructOutputReference <a name="DataAwsccEventsRuleTargetsEcsParametersTagListStructOutputReference" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_events_rule

dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStruct">DataAwsccEventsRuleTargetsEcsParametersTagListStruct</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEventsRuleTargetsEcsParametersTagListStruct
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStruct">DataAwsccEventsRuleTargetsEcsParametersTagListStruct</a>

---


### DataAwsccEventsRuleTargetsHttpParametersOutputReference <a name="DataAwsccEventsRuleTargetsHttpParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsHttpParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsHttpParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_events_rule

dataAwsccEventsRule.DataAwsccEventsRuleTargetsHttpParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsHttpParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsHttpParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsHttpParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsHttpParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsHttpParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsHttpParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsHttpParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsHttpParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsHttpParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsHttpParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsHttpParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsHttpParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsHttpParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsHttpParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsHttpParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsHttpParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsHttpParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsHttpParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsHttpParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsHttpParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsHttpParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsHttpParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsHttpParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsHttpParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsHttpParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsHttpParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsHttpParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsHttpParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsHttpParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsHttpParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsHttpParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsHttpParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsHttpParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsHttpParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsHttpParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsHttpParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsHttpParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsHttpParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsHttpParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsHttpParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsHttpParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsHttpParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsHttpParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsHttpParametersOutputReference.property.headerParameters">header_parameters</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsHttpParametersOutputReference.property.pathParameterValues">path_parameter_values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsHttpParametersOutputReference.property.queryStringParameters">query_string_parameters</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsHttpParametersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsHttpParameters">DataAwsccEventsRuleTargetsHttpParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsHttpParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsHttpParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `header_parameters`<sup>Required</sup> <a name="header_parameters" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsHttpParametersOutputReference.property.headerParameters"></a>

```python
header_parameters: StringMap
```

- *Type:* cdktn.StringMap

---

##### `path_parameter_values`<sup>Required</sup> <a name="path_parameter_values" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsHttpParametersOutputReference.property.pathParameterValues"></a>

```python
path_parameter_values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `query_string_parameters`<sup>Required</sup> <a name="query_string_parameters" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsHttpParametersOutputReference.property.queryStringParameters"></a>

```python
query_string_parameters: StringMap
```

- *Type:* cdktn.StringMap

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsHttpParametersOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEventsRuleTargetsHttpParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsHttpParameters">DataAwsccEventsRuleTargetsHttpParameters</a>

---


### DataAwsccEventsRuleTargetsInputTransformerOutputReference <a name="DataAwsccEventsRuleTargetsInputTransformerOutputReference" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsInputTransformerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsInputTransformerOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_events_rule

dataAwsccEventsRule.DataAwsccEventsRuleTargetsInputTransformerOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsInputTransformerOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsInputTransformerOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsInputTransformerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsInputTransformerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsInputTransformerOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsInputTransformerOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsInputTransformerOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsInputTransformerOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsInputTransformerOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsInputTransformerOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsInputTransformerOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsInputTransformerOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsInputTransformerOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsInputTransformerOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsInputTransformerOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsInputTransformerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsInputTransformerOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsInputTransformerOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsInputTransformerOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsInputTransformerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsInputTransformerOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsInputTransformerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsInputTransformerOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsInputTransformerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsInputTransformerOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsInputTransformerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsInputTransformerOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsInputTransformerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsInputTransformerOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsInputTransformerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsInputTransformerOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsInputTransformerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsInputTransformerOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsInputTransformerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsInputTransformerOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsInputTransformerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsInputTransformerOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsInputTransformerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsInputTransformerOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsInputTransformerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsInputTransformerOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsInputTransformerOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsInputTransformerOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsInputTransformerOutputReference.property.inputPathsMap">input_paths_map</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsInputTransformerOutputReference.property.inputTemplate">input_template</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsInputTransformerOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsInputTransformer">DataAwsccEventsRuleTargetsInputTransformer</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsInputTransformerOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsInputTransformerOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `input_paths_map`<sup>Required</sup> <a name="input_paths_map" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsInputTransformerOutputReference.property.inputPathsMap"></a>

```python
input_paths_map: StringMap
```

- *Type:* cdktn.StringMap

---

##### `input_template`<sup>Required</sup> <a name="input_template" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsInputTransformerOutputReference.property.inputTemplate"></a>

```python
input_template: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsInputTransformerOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEventsRuleTargetsInputTransformer
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsInputTransformer">DataAwsccEventsRuleTargetsInputTransformer</a>

---


### DataAwsccEventsRuleTargetsKinesisParametersOutputReference <a name="DataAwsccEventsRuleTargetsKinesisParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsKinesisParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsKinesisParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_events_rule

dataAwsccEventsRule.DataAwsccEventsRuleTargetsKinesisParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsKinesisParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsKinesisParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsKinesisParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsKinesisParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsKinesisParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsKinesisParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsKinesisParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsKinesisParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsKinesisParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsKinesisParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsKinesisParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsKinesisParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsKinesisParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsKinesisParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsKinesisParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsKinesisParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsKinesisParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsKinesisParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsKinesisParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsKinesisParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsKinesisParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsKinesisParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsKinesisParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsKinesisParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsKinesisParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsKinesisParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsKinesisParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsKinesisParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsKinesisParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsKinesisParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsKinesisParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsKinesisParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsKinesisParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsKinesisParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsKinesisParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsKinesisParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsKinesisParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsKinesisParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsKinesisParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsKinesisParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsKinesisParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsKinesisParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsKinesisParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsKinesisParametersOutputReference.property.partitionKeyPath">partition_key_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsKinesisParametersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsKinesisParameters">DataAwsccEventsRuleTargetsKinesisParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsKinesisParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsKinesisParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `partition_key_path`<sup>Required</sup> <a name="partition_key_path" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsKinesisParametersOutputReference.property.partitionKeyPath"></a>

```python
partition_key_path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsKinesisParametersOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEventsRuleTargetsKinesisParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsKinesisParameters">DataAwsccEventsRuleTargetsKinesisParameters</a>

---


### DataAwsccEventsRuleTargetsList <a name="DataAwsccEventsRuleTargetsList" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_events_rule

dataAwsccEventsRule.DataAwsccEventsRuleTargetsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccEventsRuleTargetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccEventsRuleTargetsOutputReference <a name="DataAwsccEventsRuleTargetsOutputReference" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_events_rule

dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.property.appSyncParameters">app_sync_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsAppSyncParametersOutputReference">DataAwsccEventsRuleTargetsAppSyncParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.property.batchParameters">batch_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersOutputReference">DataAwsccEventsRuleTargetsBatchParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.property.deadLetterConfig">dead_letter_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsDeadLetterConfigOutputReference">DataAwsccEventsRuleTargetsDeadLetterConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.property.ecsParameters">ecs_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference">DataAwsccEventsRuleTargetsEcsParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.property.httpParameters">http_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsHttpParametersOutputReference">DataAwsccEventsRuleTargetsHttpParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.property.input">input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.property.inputPath">input_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.property.inputTransformer">input_transformer</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsInputTransformerOutputReference">DataAwsccEventsRuleTargetsInputTransformerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.property.kinesisParameters">kinesis_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsKinesisParametersOutputReference">DataAwsccEventsRuleTargetsKinesisParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.property.redshiftDataParameters">redshift_data_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference">DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.property.retryPolicy">retry_policy</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRetryPolicyOutputReference">DataAwsccEventsRuleTargetsRetryPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.property.runCommandParameters">run_command_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersOutputReference">DataAwsccEventsRuleTargetsRunCommandParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.property.sageMakerPipelineParameters">sage_maker_pipeline_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersOutputReference">DataAwsccEventsRuleTargetsSageMakerPipelineParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.property.sqsParameters">sqs_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSqsParametersOutputReference">DataAwsccEventsRuleTargetsSqsParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargets">DataAwsccEventsRuleTargets</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `app_sync_parameters`<sup>Required</sup> <a name="app_sync_parameters" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.property.appSyncParameters"></a>

```python
app_sync_parameters: DataAwsccEventsRuleTargetsAppSyncParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsAppSyncParametersOutputReference">DataAwsccEventsRuleTargetsAppSyncParametersOutputReference</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `batch_parameters`<sup>Required</sup> <a name="batch_parameters" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.property.batchParameters"></a>

```python
batch_parameters: DataAwsccEventsRuleTargetsBatchParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersOutputReference">DataAwsccEventsRuleTargetsBatchParametersOutputReference</a>

---

##### `dead_letter_config`<sup>Required</sup> <a name="dead_letter_config" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.property.deadLetterConfig"></a>

```python
dead_letter_config: DataAwsccEventsRuleTargetsDeadLetterConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsDeadLetterConfigOutputReference">DataAwsccEventsRuleTargetsDeadLetterConfigOutputReference</a>

---

##### `ecs_parameters`<sup>Required</sup> <a name="ecs_parameters" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.property.ecsParameters"></a>

```python
ecs_parameters: DataAwsccEventsRuleTargetsEcsParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference">DataAwsccEventsRuleTargetsEcsParametersOutputReference</a>

---

##### `http_parameters`<sup>Required</sup> <a name="http_parameters" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.property.httpParameters"></a>

```python
http_parameters: DataAwsccEventsRuleTargetsHttpParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsHttpParametersOutputReference">DataAwsccEventsRuleTargetsHttpParametersOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `input`<sup>Required</sup> <a name="input" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.property.input"></a>

```python
input: str
```

- *Type:* str

---

##### `input_path`<sup>Required</sup> <a name="input_path" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.property.inputPath"></a>

```python
input_path: str
```

- *Type:* str

---

##### `input_transformer`<sup>Required</sup> <a name="input_transformer" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.property.inputTransformer"></a>

```python
input_transformer: DataAwsccEventsRuleTargetsInputTransformerOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsInputTransformerOutputReference">DataAwsccEventsRuleTargetsInputTransformerOutputReference</a>

---

##### `kinesis_parameters`<sup>Required</sup> <a name="kinesis_parameters" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.property.kinesisParameters"></a>

```python
kinesis_parameters: DataAwsccEventsRuleTargetsKinesisParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsKinesisParametersOutputReference">DataAwsccEventsRuleTargetsKinesisParametersOutputReference</a>

---

##### `redshift_data_parameters`<sup>Required</sup> <a name="redshift_data_parameters" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.property.redshiftDataParameters"></a>

```python
redshift_data_parameters: DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference">DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference</a>

---

##### `retry_policy`<sup>Required</sup> <a name="retry_policy" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.property.retryPolicy"></a>

```python
retry_policy: DataAwsccEventsRuleTargetsRetryPolicyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRetryPolicyOutputReference">DataAwsccEventsRuleTargetsRetryPolicyOutputReference</a>

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `run_command_parameters`<sup>Required</sup> <a name="run_command_parameters" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.property.runCommandParameters"></a>

```python
run_command_parameters: DataAwsccEventsRuleTargetsRunCommandParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersOutputReference">DataAwsccEventsRuleTargetsRunCommandParametersOutputReference</a>

---

##### `sage_maker_pipeline_parameters`<sup>Required</sup> <a name="sage_maker_pipeline_parameters" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.property.sageMakerPipelineParameters"></a>

```python
sage_maker_pipeline_parameters: DataAwsccEventsRuleTargetsSageMakerPipelineParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersOutputReference">DataAwsccEventsRuleTargetsSageMakerPipelineParametersOutputReference</a>

---

##### `sqs_parameters`<sup>Required</sup> <a name="sqs_parameters" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.property.sqsParameters"></a>

```python
sqs_parameters: DataAwsccEventsRuleTargetsSqsParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSqsParametersOutputReference">DataAwsccEventsRuleTargetsSqsParametersOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEventsRuleTargets
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargets">DataAwsccEventsRuleTargets</a>

---


### DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference <a name="DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_events_rule

dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference.property.database">database</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference.property.dbUser">db_user</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference.property.secretManagerArn">secret_manager_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference.property.sql">sql</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference.property.sqls">sqls</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference.property.statementName">statement_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference.property.withEvent">with_event</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParameters">DataAwsccEventsRuleTargetsRedshiftDataParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference.property.database"></a>

```python
database: str
```

- *Type:* str

---

##### `db_user`<sup>Required</sup> <a name="db_user" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference.property.dbUser"></a>

```python
db_user: str
```

- *Type:* str

---

##### `secret_manager_arn`<sup>Required</sup> <a name="secret_manager_arn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference.property.secretManagerArn"></a>

```python
secret_manager_arn: str
```

- *Type:* str

---

##### `sql`<sup>Required</sup> <a name="sql" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference.property.sql"></a>

```python
sql: str
```

- *Type:* str

---

##### `sqls`<sup>Required</sup> <a name="sqls" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference.property.sqls"></a>

```python
sqls: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `statement_name`<sup>Required</sup> <a name="statement_name" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference.property.statementName"></a>

```python
statement_name: str
```

- *Type:* str

---

##### `with_event`<sup>Required</sup> <a name="with_event" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference.property.withEvent"></a>

```python
with_event: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEventsRuleTargetsRedshiftDataParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParameters">DataAwsccEventsRuleTargetsRedshiftDataParameters</a>

---


### DataAwsccEventsRuleTargetsRetryPolicyOutputReference <a name="DataAwsccEventsRuleTargetsRetryPolicyOutputReference" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRetryPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRetryPolicyOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_events_rule

dataAwsccEventsRule.DataAwsccEventsRuleTargetsRetryPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRetryPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRetryPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRetryPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRetryPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRetryPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRetryPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRetryPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRetryPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRetryPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRetryPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRetryPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRetryPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRetryPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRetryPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRetryPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRetryPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRetryPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRetryPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRetryPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRetryPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRetryPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRetryPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRetryPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRetryPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRetryPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRetryPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRetryPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRetryPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRetryPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRetryPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRetryPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRetryPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRetryPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRetryPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRetryPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRetryPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRetryPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRetryPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRetryPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRetryPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRetryPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRetryPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRetryPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRetryPolicyOutputReference.property.maximumEventAgeInSeconds">maximum_event_age_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRetryPolicyOutputReference.property.maximumRetryAttempts">maximum_retry_attempts</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRetryPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRetryPolicy">DataAwsccEventsRuleTargetsRetryPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRetryPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRetryPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `maximum_event_age_in_seconds`<sup>Required</sup> <a name="maximum_event_age_in_seconds" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRetryPolicyOutputReference.property.maximumEventAgeInSeconds"></a>

```python
maximum_event_age_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `maximum_retry_attempts`<sup>Required</sup> <a name="maximum_retry_attempts" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRetryPolicyOutputReference.property.maximumRetryAttempts"></a>

```python
maximum_retry_attempts: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRetryPolicyOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEventsRuleTargetsRetryPolicy
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRetryPolicy">DataAwsccEventsRuleTargetsRetryPolicy</a>

---


### DataAwsccEventsRuleTargetsRunCommandParametersOutputReference <a name="DataAwsccEventsRuleTargetsRunCommandParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_events_rule

dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersOutputReference.property.runCommandTargets">run_command_targets</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsList">DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParameters">DataAwsccEventsRuleTargetsRunCommandParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `run_command_targets`<sup>Required</sup> <a name="run_command_targets" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersOutputReference.property.runCommandTargets"></a>

```python
run_command_targets: DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsList">DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEventsRuleTargetsRunCommandParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParameters">DataAwsccEventsRuleTargetsRunCommandParameters</a>

---


### DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsList <a name="DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsList" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_events_rule

dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference <a name="DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_events_rule

dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargets">DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargets</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargets
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargets">DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargets</a>

---


### DataAwsccEventsRuleTargetsSageMakerPipelineParametersOutputReference <a name="DataAwsccEventsRuleTargetsSageMakerPipelineParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_events_rule

dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersOutputReference.property.pipelineParameterList">pipeline_parameter_list</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructList">DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParameters">DataAwsccEventsRuleTargetsSageMakerPipelineParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `pipeline_parameter_list`<sup>Required</sup> <a name="pipeline_parameter_list" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersOutputReference.property.pipelineParameterList"></a>

```python
pipeline_parameter_list: DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructList">DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEventsRuleTargetsSageMakerPipelineParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParameters">DataAwsccEventsRuleTargetsSageMakerPipelineParameters</a>

---


### DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructList <a name="DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructList" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_events_rule

dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference <a name="DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_events_rule

dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStruct">DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStruct</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStruct
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStruct">DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStruct</a>

---


### DataAwsccEventsRuleTargetsSqsParametersOutputReference <a name="DataAwsccEventsRuleTargetsSqsParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSqsParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSqsParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_events_rule

dataAwsccEventsRule.DataAwsccEventsRuleTargetsSqsParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSqsParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSqsParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSqsParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSqsParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSqsParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSqsParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSqsParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSqsParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSqsParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSqsParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSqsParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSqsParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSqsParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSqsParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSqsParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSqsParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSqsParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSqsParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSqsParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSqsParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSqsParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSqsParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSqsParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSqsParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSqsParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSqsParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSqsParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSqsParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSqsParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSqsParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSqsParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSqsParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSqsParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSqsParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSqsParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSqsParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSqsParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSqsParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSqsParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSqsParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSqsParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSqsParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSqsParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSqsParametersOutputReference.property.messageGroupId">message_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSqsParametersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSqsParameters">DataAwsccEventsRuleTargetsSqsParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSqsParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSqsParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `message_group_id`<sup>Required</sup> <a name="message_group_id" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSqsParametersOutputReference.property.messageGroupId"></a>

```python
message_group_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSqsParametersOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEventsRuleTargetsSqsParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSqsParameters">DataAwsccEventsRuleTargetsSqsParameters</a>

---



