# `dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint` Submodule <a name="`dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint` Submodule" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint <a name="DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.106.0/docs/data-sources/licensemanagerusersubscriptions_license_server_endpoint awscc_licensemanagerusersubscriptions_license_server_endpoint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_licensemanagerusersubscriptions_license_server_endpoint

dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.106.0/docs/data-sources/licensemanagerusersubscriptions_license_server_endpoint#id DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_licensemanagerusersubscriptions_license_server_endpoint

dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_licensemanagerusersubscriptions_license_server_endpoint

dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_licensemanagerusersubscriptions_license_server_endpoint

dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_licensemanagerusersubscriptions_license_server_endpoint

dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.106.0/docs/data-sources/licensemanagerusersubscriptions_license_server_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.property.creationTime">creation_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.property.identityProviderArn">identity_provider_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.property.licenseServerEndpointArn">license_server_endpoint_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.property.licenseServerEndpointId">license_server_endpoint_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.property.licenseServerEndpointProvisioningStatus">license_server_endpoint_provisioning_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.property.licenseServers">license_servers</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersList">DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.property.licenseServerSettings">license_server_settings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference">DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.property.serverEndpoint">server_endpoint</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointServerEndpointOutputReference">DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointServerEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.property.serverType">server_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointTagsList">DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `creation_time`<sup>Required</sup> <a name="creation_time" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.property.creationTime"></a>

```python
creation_time: str
```

- *Type:* str

---

##### `identity_provider_arn`<sup>Required</sup> <a name="identity_provider_arn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.property.identityProviderArn"></a>

```python
identity_provider_arn: str
```

- *Type:* str

---

##### `license_server_endpoint_arn`<sup>Required</sup> <a name="license_server_endpoint_arn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.property.licenseServerEndpointArn"></a>

```python
license_server_endpoint_arn: str
```

- *Type:* str

---

##### `license_server_endpoint_id`<sup>Required</sup> <a name="license_server_endpoint_id" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.property.licenseServerEndpointId"></a>

```python
license_server_endpoint_id: str
```

- *Type:* str

---

##### `license_server_endpoint_provisioning_status`<sup>Required</sup> <a name="license_server_endpoint_provisioning_status" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.property.licenseServerEndpointProvisioningStatus"></a>

```python
license_server_endpoint_provisioning_status: str
```

- *Type:* str

---

##### `license_servers`<sup>Required</sup> <a name="license_servers" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.property.licenseServers"></a>

```python
license_servers: DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersList">DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersList</a>

---

##### `license_server_settings`<sup>Required</sup> <a name="license_server_settings" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.property.licenseServerSettings"></a>

```python
license_server_settings: DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference">DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference</a>

---

##### `server_endpoint`<sup>Required</sup> <a name="server_endpoint" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.property.serverEndpoint"></a>

```python
server_endpoint: DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointServerEndpointOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointServerEndpointOutputReference">DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointServerEndpointOutputReference</a>

---

##### `server_type`<sup>Required</sup> <a name="server_type" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.property.serverType"></a>

```python
server_type: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.property.tags"></a>

```python
tags: DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointTagsList">DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointTagsList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointConfig <a name="DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointConfig" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_licensemanagerusersubscriptions_license_server_endpoint

dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.106.0/docs/data-sources/licensemanagerusersubscriptions_license_server_endpoint#id DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServers <a name="DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServers" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServers.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_licensemanagerusersubscriptions_license_server_endpoint

dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServers()
```


### DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettings <a name="DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettings" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettings.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_licensemanagerusersubscriptions_license_server_endpoint

dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettings()
```


### DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettings <a name="DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettings" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettings.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_licensemanagerusersubscriptions_license_server_endpoint

dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettings()
```


### DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettings <a name="DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettings" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettings.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_licensemanagerusersubscriptions_license_server_endpoint

dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettings()
```


### DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProvider <a name="DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProvider" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProvider"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProvider.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_licensemanagerusersubscriptions_license_server_endpoint

dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProvider()
```


### DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProvider <a name="DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProvider" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProvider"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProvider.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_licensemanagerusersubscriptions_license_server_endpoint

dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProvider()
```


### DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointServerEndpoint <a name="DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointServerEndpoint" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointServerEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointServerEndpoint.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_licensemanagerusersubscriptions_license_server_endpoint

dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointServerEndpoint()
```


### DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointTags <a name="DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointTags" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_licensemanagerusersubscriptions_license_server_endpoint

dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference <a name="DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_licensemanagerusersubscriptions_license_server_endpoint

dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference.property.serverSettings">server_settings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference">DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference.property.serverType">server_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettings">DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `server_settings`<sup>Required</sup> <a name="server_settings" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference.property.serverSettings"></a>

```python
server_settings: DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference">DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference</a>

---

##### `server_type`<sup>Required</sup> <a name="server_type" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference.property.serverType"></a>

```python
server_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettings">DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettings</a>

---


### DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference <a name="DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_licensemanagerusersubscriptions_license_server_endpoint

dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference.property.rdsSalSettings">rds_sal_settings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference">DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettings">DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `rds_sal_settings`<sup>Required</sup> <a name="rds_sal_settings" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference.property.rdsSalSettings"></a>

```python
rds_sal_settings: DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference">DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettings">DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettings</a>

---


### DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference <a name="DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_licensemanagerusersubscriptions_license_server_endpoint

dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference.property.rdsSalCredentialsProvider">rds_sal_credentials_provider</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference">DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettings">DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `rds_sal_credentials_provider`<sup>Required</sup> <a name="rds_sal_credentials_provider" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference.property.rdsSalCredentialsProvider"></a>

```python
rds_sal_credentials_provider: DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference">DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettings">DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettings</a>

---


### DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference <a name="DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_licensemanagerusersubscriptions_license_server_endpoint

dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference.property.secretsManagerCredentialsProvider">secrets_manager_credentials_provider</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderOutputReference">DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProvider">DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProvider</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `secrets_manager_credentials_provider`<sup>Required</sup> <a name="secrets_manager_credentials_provider" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference.property.secretsManagerCredentialsProvider"></a>

```python
secrets_manager_credentials_provider: DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderOutputReference">DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProvider
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProvider">DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProvider</a>

---


### DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderOutputReference <a name="DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderOutputReference" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_licensemanagerusersubscriptions_license_server_endpoint

dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderOutputReference.property.secretId">secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProvider">DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProvider</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `secret_id`<sup>Required</sup> <a name="secret_id" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderOutputReference.property.secretId"></a>

```python
secret_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProvider
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProvider">DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProvider</a>

---


### DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersList <a name="DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersList" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_licensemanagerusersubscriptions_license_server_endpoint

dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference <a name="DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_licensemanagerusersubscriptions_license_server_endpoint

dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference.property.healthStatus">health_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference.property.ipv4Address">ipv4_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference.property.ipv6Address">ipv6_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference.property.provisioningStatus">provisioning_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServers">DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServers</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `health_status`<sup>Required</sup> <a name="health_status" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference.property.healthStatus"></a>

```python
health_status: str
```

- *Type:* str

---

##### `ipv4_address`<sup>Required</sup> <a name="ipv4_address" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference.property.ipv4Address"></a>

```python
ipv4_address: str
```

- *Type:* str

---

##### `ipv6_address`<sup>Required</sup> <a name="ipv6_address" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference.property.ipv6Address"></a>

```python
ipv6_address: str
```

- *Type:* str

---

##### `provisioning_status`<sup>Required</sup> <a name="provisioning_status" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference.property.provisioningStatus"></a>

```python
provisioning_status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServers
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServers">DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServers</a>

---


### DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointServerEndpointOutputReference <a name="DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointServerEndpointOutputReference" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointServerEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointServerEndpointOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_licensemanagerusersubscriptions_license_server_endpoint

dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointServerEndpointOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointServerEndpointOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointServerEndpointOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointServerEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointServerEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointServerEndpointOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointServerEndpointOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointServerEndpointOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointServerEndpointOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointServerEndpointOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointServerEndpointOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointServerEndpointOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointServerEndpointOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointServerEndpointOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointServerEndpointOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointServerEndpointOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointServerEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointServerEndpointOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointServerEndpointOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointServerEndpointOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointServerEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointServerEndpointOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointServerEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointServerEndpointOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointServerEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointServerEndpointOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointServerEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointServerEndpointOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointServerEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointServerEndpointOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointServerEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointServerEndpointOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointServerEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointServerEndpointOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointServerEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointServerEndpointOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointServerEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointServerEndpointOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointServerEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointServerEndpointOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointServerEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointServerEndpointOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointServerEndpointOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointServerEndpointOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointServerEndpointOutputReference.property.endpoint">endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointServerEndpointOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointServerEndpoint">DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointServerEndpoint</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointServerEndpointOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointServerEndpointOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointServerEndpointOutputReference.property.endpoint"></a>

```python
endpoint: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointServerEndpointOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointServerEndpoint
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointServerEndpoint">DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointServerEndpoint</a>

---


### DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointTagsList <a name="DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointTagsList" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_licensemanagerusersubscriptions_license_server_endpoint

dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference <a name="DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_licensemanagerusersubscriptions_license_server_endpoint

dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointTags">DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerusersubscriptionsLicenseServerEndpoint.DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointTags">DataAwsccLicensemanagerusersubscriptionsLicenseServerEndpointTags</a>

---



