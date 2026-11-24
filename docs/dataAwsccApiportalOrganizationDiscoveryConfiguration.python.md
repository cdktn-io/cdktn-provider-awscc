# `dataAwsccApiportalOrganizationDiscoveryConfiguration` Submodule <a name="`dataAwsccApiportalOrganizationDiscoveryConfiguration` Submodule" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccApiportalOrganizationDiscoveryConfiguration <a name="DataAwsccApiportalOrganizationDiscoveryConfiguration" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/data-sources/apiportal_organization_discovery_configuration awscc_apiportal_organization_discovery_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_apiportal_organization_discovery_configuration

dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/data-sources/apiportal_organization_discovery_configuration#id DataAwsccApiportalOrganizationDiscoveryConfiguration#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccApiportalOrganizationDiscoveryConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_apiportal_organization_discovery_configuration

dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_apiportal_organization_discovery_configuration

dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_apiportal_organization_discovery_configuration

dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_apiportal_organization_discovery_configuration

dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccApiportalOrganizationDiscoveryConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccApiportalOrganizationDiscoveryConfiguration to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccApiportalOrganizationDiscoveryConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/data-sources/apiportal_organization_discovery_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccApiportalOrganizationDiscoveryConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.property.discoveryConfigurationStatus">discovery_configuration_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.property.discoveryFeatures">discovery_features</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.property.discoveryFilters">discovery_filters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference">DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.property.discoverySources">discovery_sources</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationTagsList">DataAwsccApiportalOrganizationDiscoveryConfigurationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `discovery_configuration_status`<sup>Required</sup> <a name="discovery_configuration_status" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.property.discoveryConfigurationStatus"></a>

```python
discovery_configuration_status: str
```

- *Type:* str

---

##### `discovery_features`<sup>Required</sup> <a name="discovery_features" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.property.discoveryFeatures"></a>

```python
discovery_features: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `discovery_filters`<sup>Required</sup> <a name="discovery_filters" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.property.discoveryFilters"></a>

```python
discovery_filters: DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference">DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference</a>

---

##### `discovery_sources`<sup>Required</sup> <a name="discovery_sources" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.property.discoverySources"></a>

```python
discovery_sources: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.property.tags"></a>

```python
tags: DataAwsccApiportalOrganizationDiscoveryConfigurationTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationTagsList">DataAwsccApiportalOrganizationDiscoveryConfigurationTagsList</a>

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfiguration.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccApiportalOrganizationDiscoveryConfigurationConfig <a name="DataAwsccApiportalOrganizationDiscoveryConfigurationConfig" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_apiportal_organization_discovery_configuration

dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/data-sources/apiportal_organization_discovery_configuration#id DataAwsccApiportalOrganizationDiscoveryConfiguration#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFilters <a name="DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFilters" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFilters.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_apiportal_organization_discovery_configuration

dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFilters()
```


### DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFilters <a name="DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFilters" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFilters.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_apiportal_organization_discovery_configuration

dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFilters()
```


### DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFilters <a name="DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFilters" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFilters.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_apiportal_organization_discovery_configuration

dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFilters()
```


### DataAwsccApiportalOrganizationDiscoveryConfigurationTags <a name="DataAwsccApiportalOrganizationDiscoveryConfigurationTags" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_apiportal_organization_discovery_configuration

dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference <a name="DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_apiportal_organization_discovery_configuration

dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.property.accountIds">account_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.property.organizationalUnitIds">organizational_unit_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.property.resourceArns">resource_arns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFilters">DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFilters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `account_ids`<sup>Required</sup> <a name="account_ids" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.property.accountIds"></a>

```python
account_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `organizational_unit_ids`<sup>Required</sup> <a name="organizational_unit_ids" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.property.organizationalUnitIds"></a>

```python
organizational_unit_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `resource_arns`<sup>Required</sup> <a name="resource_arns" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.property.resourceArns"></a>

```python
resource_arns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFilters
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFilters">DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFilters</a>

---


### DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference <a name="DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_apiportal_organization_discovery_configuration

dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.property.accountIds">account_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.property.organizationalUnitIds">organizational_unit_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFilters">DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFilters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `account_ids`<sup>Required</sup> <a name="account_ids" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.property.accountIds"></a>

```python
account_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `organizational_unit_ids`<sup>Required</sup> <a name="organizational_unit_ids" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.property.organizationalUnitIds"></a>

```python
organizational_unit_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFilters
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFilters">DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFilters</a>

---


### DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference <a name="DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_apiportal_organization_discovery_configuration

dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.property.exclusionFilters">exclusion_filters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference">DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.property.inclusionFilters">inclusion_filters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference">DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFilters">DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFilters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `exclusion_filters`<sup>Required</sup> <a name="exclusion_filters" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.property.exclusionFilters"></a>

```python
exclusion_filters: DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference">DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference</a>

---

##### `inclusion_filters`<sup>Required</sup> <a name="inclusion_filters" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.property.inclusionFilters"></a>

```python
inclusion_filters: DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference">DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFilters
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFilters">DataAwsccApiportalOrganizationDiscoveryConfigurationDiscoveryFilters</a>

---


### DataAwsccApiportalOrganizationDiscoveryConfigurationTagsList <a name="DataAwsccApiportalOrganizationDiscoveryConfigurationTagsList" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_apiportal_organization_discovery_configuration

dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccApiportalOrganizationDiscoveryConfigurationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccApiportalOrganizationDiscoveryConfigurationTagsOutputReference <a name="DataAwsccApiportalOrganizationDiscoveryConfigurationTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_apiportal_organization_discovery_configuration

dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationTags">DataAwsccApiportalOrganizationDiscoveryConfigurationTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccApiportalOrganizationDiscoveryConfigurationTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApiportalOrganizationDiscoveryConfiguration.DataAwsccApiportalOrganizationDiscoveryConfigurationTags">DataAwsccApiportalOrganizationDiscoveryConfigurationTags</a>

---



