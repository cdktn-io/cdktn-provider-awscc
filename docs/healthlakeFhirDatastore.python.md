# `healthlakeFhirDatastore` Submodule <a name="`healthlakeFhirDatastore` Submodule" id="@cdktn/provider-awscc.healthlakeFhirDatastore"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### HealthlakeFhirDatastore <a name="HealthlakeFhirDatastore" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/healthlake_fhir_datastore awscc_healthlake_fhir_datastore}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.Initializer"></a>

```python
from cdktn_provider_awscc import healthlake_fhir_datastore

healthlakeFhirDatastore.HealthlakeFhirDatastore(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  datastore_type_version: str,
  datastore_name: str = None,
  identity_provider_configuration: HealthlakeFhirDatastoreIdentityProviderConfiguration = None,
  preload_data_config: HealthlakeFhirDatastorePreloadDataConfig = None,
  sse_configuration: HealthlakeFhirDatastoreSseConfiguration = None,
  tags: IResolvable | typing.List[HealthlakeFhirDatastoreTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.Initializer.parameter.datastoreTypeVersion">datastore_type_version</a></code> | <code>str</code> | The FHIR version. Only R4 version data is supported. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.Initializer.parameter.datastoreName">datastore_name</a></code> | <code>str</code> | The user-generated name for the Data Store. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.Initializer.parameter.identityProviderConfiguration">identity_provider_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfiguration">HealthlakeFhirDatastoreIdentityProviderConfiguration</a></code> | The identity provider configuration for the datastore. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.Initializer.parameter.preloadDataConfig">preload_data_config</a></code> | <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfig">HealthlakeFhirDatastorePreloadDataConfig</a></code> | The preloaded data configuration for the Data Store. Only data preloaded from Synthea is supported. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.Initializer.parameter.sseConfiguration">sse_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfiguration">HealthlakeFhirDatastoreSseConfiguration</a></code> | The server-side encryption key configuration for a customer provided encryption key. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTags">HealthlakeFhirDatastoreTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/healthlake_fhir_datastore#tags HealthlakeFhirDatastore#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `datastore_type_version`<sup>Required</sup> <a name="datastore_type_version" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.Initializer.parameter.datastoreTypeVersion"></a>

- *Type:* str

The FHIR version. Only R4 version data is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/healthlake_fhir_datastore#datastore_type_version HealthlakeFhirDatastore#datastore_type_version}

---

##### `datastore_name`<sup>Optional</sup> <a name="datastore_name" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.Initializer.parameter.datastoreName"></a>

- *Type:* str

The user-generated name for the Data Store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/healthlake_fhir_datastore#datastore_name HealthlakeFhirDatastore#datastore_name}

---

##### `identity_provider_configuration`<sup>Optional</sup> <a name="identity_provider_configuration" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.Initializer.parameter.identityProviderConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfiguration">HealthlakeFhirDatastoreIdentityProviderConfiguration</a>

The identity provider configuration for the datastore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/healthlake_fhir_datastore#identity_provider_configuration HealthlakeFhirDatastore#identity_provider_configuration}

---

##### `preload_data_config`<sup>Optional</sup> <a name="preload_data_config" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.Initializer.parameter.preloadDataConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfig">HealthlakeFhirDatastorePreloadDataConfig</a>

The preloaded data configuration for the Data Store. Only data preloaded from Synthea is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/healthlake_fhir_datastore#preload_data_config HealthlakeFhirDatastore#preload_data_config}

---

##### `sse_configuration`<sup>Optional</sup> <a name="sse_configuration" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.Initializer.parameter.sseConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfiguration">HealthlakeFhirDatastoreSseConfiguration</a>

The server-side encryption key configuration for a customer provided encryption key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/healthlake_fhir_datastore#sse_configuration HealthlakeFhirDatastore#sse_configuration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTags">HealthlakeFhirDatastoreTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/healthlake_fhir_datastore#tags HealthlakeFhirDatastore#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.putIdentityProviderConfiguration">put_identity_provider_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.putPreloadDataConfig">put_preload_data_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.putSseConfiguration">put_sse_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.resetDatastoreName">reset_datastore_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.resetIdentityProviderConfiguration">reset_identity_provider_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.resetPreloadDataConfig">reset_preload_data_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.resetSseConfiguration">reset_sse_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_identity_provider_configuration` <a name="put_identity_provider_configuration" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.putIdentityProviderConfiguration"></a>

```python
def put_identity_provider_configuration(
  authorization_strategy: str = None,
  fine_grained_authorization_enabled: bool | IResolvable = None,
  idp_lambda_arn: str = None,
  metadata: str = None
) -> None
```

###### `authorization_strategy`<sup>Optional</sup> <a name="authorization_strategy" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.putIdentityProviderConfiguration.parameter.authorizationStrategy"></a>

- *Type:* str

Type of Authorization Strategy. The two types of supported Authorization strategies are SMART_ON_FHIR_V1 and AWS_AUTH.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/healthlake_fhir_datastore#authorization_strategy HealthlakeFhirDatastore#authorization_strategy}

---

###### `fine_grained_authorization_enabled`<sup>Optional</sup> <a name="fine_grained_authorization_enabled" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.putIdentityProviderConfiguration.parameter.fineGrainedAuthorizationEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Flag to indicate if fine-grained authorization will be enabled for the datastore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/healthlake_fhir_datastore#fine_grained_authorization_enabled HealthlakeFhirDatastore#fine_grained_authorization_enabled}

---

###### `idp_lambda_arn`<sup>Optional</sup> <a name="idp_lambda_arn" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.putIdentityProviderConfiguration.parameter.idpLambdaArn"></a>

- *Type:* str

The Amazon Resource Name (ARN) of the Lambda function that will be used to decode the access token created by the authorization server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/healthlake_fhir_datastore#idp_lambda_arn HealthlakeFhirDatastore#idp_lambda_arn}

---

###### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.putIdentityProviderConfiguration.parameter.metadata"></a>

- *Type:* str

The JSON metadata elements for identity provider configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/healthlake_fhir_datastore#metadata HealthlakeFhirDatastore#metadata}

---

##### `put_preload_data_config` <a name="put_preload_data_config" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.putPreloadDataConfig"></a>

```python
def put_preload_data_config(
  preload_data_type: str = None
) -> None
```

###### `preload_data_type`<sup>Optional</sup> <a name="preload_data_type" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.putPreloadDataConfig.parameter.preloadDataType"></a>

- *Type:* str

The type of preloaded data. Only Synthea preloaded data is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/healthlake_fhir_datastore#preload_data_type HealthlakeFhirDatastore#preload_data_type}

---

##### `put_sse_configuration` <a name="put_sse_configuration" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.putSseConfiguration"></a>

```python
def put_sse_configuration(
  kms_encryption_config: HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfig = None
) -> None
```

###### `kms_encryption_config`<sup>Optional</sup> <a name="kms_encryption_config" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.putSseConfiguration.parameter.kmsEncryptionConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfig">HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfig</a>

The customer-managed-key (CMK) used when creating a Data Store.

If a customer owned key is not specified, an AWS owned key will be used for encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/healthlake_fhir_datastore#kms_encryption_config HealthlakeFhirDatastore#kms_encryption_config}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[HealthlakeFhirDatastoreTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTags">HealthlakeFhirDatastoreTags</a>]

---

##### `reset_datastore_name` <a name="reset_datastore_name" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.resetDatastoreName"></a>

```python
def reset_datastore_name() -> None
```

##### `reset_identity_provider_configuration` <a name="reset_identity_provider_configuration" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.resetIdentityProviderConfiguration"></a>

```python
def reset_identity_provider_configuration() -> None
```

##### `reset_preload_data_config` <a name="reset_preload_data_config" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.resetPreloadDataConfig"></a>

```python
def reset_preload_data_config() -> None
```

##### `reset_sse_configuration` <a name="reset_sse_configuration" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.resetSseConfiguration"></a>

```python
def reset_sse_configuration() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a HealthlakeFhirDatastore resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.isConstruct"></a>

```python
from cdktn_provider_awscc import healthlake_fhir_datastore

healthlakeFhirDatastore.HealthlakeFhirDatastore.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.isTerraformElement"></a>

```python
from cdktn_provider_awscc import healthlake_fhir_datastore

healthlakeFhirDatastore.HealthlakeFhirDatastore.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.isTerraformResource"></a>

```python
from cdktn_provider_awscc import healthlake_fhir_datastore

healthlakeFhirDatastore.HealthlakeFhirDatastore.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import healthlake_fhir_datastore

healthlakeFhirDatastore.HealthlakeFhirDatastore.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a HealthlakeFhirDatastore resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the HealthlakeFhirDatastore to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing HealthlakeFhirDatastore that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/healthlake_fhir_datastore#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the HealthlakeFhirDatastore to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.createdAt">created_at</a></code> | <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference">HealthlakeFhirDatastoreCreatedAtOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.datastoreArn">datastore_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.datastoreEndpoint">datastore_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.datastoreId">datastore_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.datastoreStatus">datastore_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.identityProviderConfiguration">identity_provider_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference">HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.preloadDataConfig">preload_data_config</a></code> | <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference">HealthlakeFhirDatastorePreloadDataConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.sseConfiguration">sse_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference">HealthlakeFhirDatastoreSseConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsList">HealthlakeFhirDatastoreTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.datastoreNameInput">datastore_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.datastoreTypeVersionInput">datastore_type_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.identityProviderConfigurationInput">identity_provider_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfiguration">HealthlakeFhirDatastoreIdentityProviderConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.preloadDataConfigInput">preload_data_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfig">HealthlakeFhirDatastorePreloadDataConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.sseConfigurationInput">sse_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfiguration">HealthlakeFhirDatastoreSseConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTags">HealthlakeFhirDatastoreTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.datastoreName">datastore_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.datastoreTypeVersion">datastore_type_version</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.createdAt"></a>

```python
created_at: HealthlakeFhirDatastoreCreatedAtOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference">HealthlakeFhirDatastoreCreatedAtOutputReference</a>

---

##### `datastore_arn`<sup>Required</sup> <a name="datastore_arn" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.datastoreArn"></a>

```python
datastore_arn: str
```

- *Type:* str

---

##### `datastore_endpoint`<sup>Required</sup> <a name="datastore_endpoint" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.datastoreEndpoint"></a>

```python
datastore_endpoint: str
```

- *Type:* str

---

##### `datastore_id`<sup>Required</sup> <a name="datastore_id" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.datastoreId"></a>

```python
datastore_id: str
```

- *Type:* str

---

##### `datastore_status`<sup>Required</sup> <a name="datastore_status" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.datastoreStatus"></a>

```python
datastore_status: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `identity_provider_configuration`<sup>Required</sup> <a name="identity_provider_configuration" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.identityProviderConfiguration"></a>

```python
identity_provider_configuration: HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference">HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference</a>

---

##### `preload_data_config`<sup>Required</sup> <a name="preload_data_config" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.preloadDataConfig"></a>

```python
preload_data_config: HealthlakeFhirDatastorePreloadDataConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference">HealthlakeFhirDatastorePreloadDataConfigOutputReference</a>

---

##### `sse_configuration`<sup>Required</sup> <a name="sse_configuration" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.sseConfiguration"></a>

```python
sse_configuration: HealthlakeFhirDatastoreSseConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference">HealthlakeFhirDatastoreSseConfigurationOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.tags"></a>

```python
tags: HealthlakeFhirDatastoreTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsList">HealthlakeFhirDatastoreTagsList</a>

---

##### `datastore_name_input`<sup>Optional</sup> <a name="datastore_name_input" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.datastoreNameInput"></a>

```python
datastore_name_input: str
```

- *Type:* str

---

##### `datastore_type_version_input`<sup>Optional</sup> <a name="datastore_type_version_input" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.datastoreTypeVersionInput"></a>

```python
datastore_type_version_input: str
```

- *Type:* str

---

##### `identity_provider_configuration_input`<sup>Optional</sup> <a name="identity_provider_configuration_input" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.identityProviderConfigurationInput"></a>

```python
identity_provider_configuration_input: IResolvable | HealthlakeFhirDatastoreIdentityProviderConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfiguration">HealthlakeFhirDatastoreIdentityProviderConfiguration</a>

---

##### `preload_data_config_input`<sup>Optional</sup> <a name="preload_data_config_input" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.preloadDataConfigInput"></a>

```python
preload_data_config_input: IResolvable | HealthlakeFhirDatastorePreloadDataConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfig">HealthlakeFhirDatastorePreloadDataConfig</a>

---

##### `sse_configuration_input`<sup>Optional</sup> <a name="sse_configuration_input" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.sseConfigurationInput"></a>

```python
sse_configuration_input: IResolvable | HealthlakeFhirDatastoreSseConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfiguration">HealthlakeFhirDatastoreSseConfiguration</a>

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[HealthlakeFhirDatastoreTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTags">HealthlakeFhirDatastoreTags</a>]

---

##### `datastore_name`<sup>Required</sup> <a name="datastore_name" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.datastoreName"></a>

```python
datastore_name: str
```

- *Type:* str

---

##### `datastore_type_version`<sup>Required</sup> <a name="datastore_type_version" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.datastoreTypeVersion"></a>

```python
datastore_type_version: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### HealthlakeFhirDatastoreConfig <a name="HealthlakeFhirDatastoreConfig" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreConfig.Initializer"></a>

```python
from cdktn_provider_awscc import healthlake_fhir_datastore

healthlakeFhirDatastore.HealthlakeFhirDatastoreConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  datastore_type_version: str,
  datastore_name: str = None,
  identity_provider_configuration: HealthlakeFhirDatastoreIdentityProviderConfiguration = None,
  preload_data_config: HealthlakeFhirDatastorePreloadDataConfig = None,
  sse_configuration: HealthlakeFhirDatastoreSseConfiguration = None,
  tags: IResolvable | typing.List[HealthlakeFhirDatastoreTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreConfig.property.datastoreTypeVersion">datastore_type_version</a></code> | <code>str</code> | The FHIR version. Only R4 version data is supported. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreConfig.property.datastoreName">datastore_name</a></code> | <code>str</code> | The user-generated name for the Data Store. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreConfig.property.identityProviderConfiguration">identity_provider_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfiguration">HealthlakeFhirDatastoreIdentityProviderConfiguration</a></code> | The identity provider configuration for the datastore. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreConfig.property.preloadDataConfig">preload_data_config</a></code> | <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfig">HealthlakeFhirDatastorePreloadDataConfig</a></code> | The preloaded data configuration for the Data Store. Only data preloaded from Synthea is supported. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreConfig.property.sseConfiguration">sse_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfiguration">HealthlakeFhirDatastoreSseConfiguration</a></code> | The server-side encryption key configuration for a customer provided encryption key. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTags">HealthlakeFhirDatastoreTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/healthlake_fhir_datastore#tags HealthlakeFhirDatastore#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `datastore_type_version`<sup>Required</sup> <a name="datastore_type_version" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreConfig.property.datastoreTypeVersion"></a>

```python
datastore_type_version: str
```

- *Type:* str

The FHIR version. Only R4 version data is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/healthlake_fhir_datastore#datastore_type_version HealthlakeFhirDatastore#datastore_type_version}

---

##### `datastore_name`<sup>Optional</sup> <a name="datastore_name" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreConfig.property.datastoreName"></a>

```python
datastore_name: str
```

- *Type:* str

The user-generated name for the Data Store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/healthlake_fhir_datastore#datastore_name HealthlakeFhirDatastore#datastore_name}

---

##### `identity_provider_configuration`<sup>Optional</sup> <a name="identity_provider_configuration" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreConfig.property.identityProviderConfiguration"></a>

```python
identity_provider_configuration: HealthlakeFhirDatastoreIdentityProviderConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfiguration">HealthlakeFhirDatastoreIdentityProviderConfiguration</a>

The identity provider configuration for the datastore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/healthlake_fhir_datastore#identity_provider_configuration HealthlakeFhirDatastore#identity_provider_configuration}

---

##### `preload_data_config`<sup>Optional</sup> <a name="preload_data_config" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreConfig.property.preloadDataConfig"></a>

```python
preload_data_config: HealthlakeFhirDatastorePreloadDataConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfig">HealthlakeFhirDatastorePreloadDataConfig</a>

The preloaded data configuration for the Data Store. Only data preloaded from Synthea is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/healthlake_fhir_datastore#preload_data_config HealthlakeFhirDatastore#preload_data_config}

---

##### `sse_configuration`<sup>Optional</sup> <a name="sse_configuration" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreConfig.property.sseConfiguration"></a>

```python
sse_configuration: HealthlakeFhirDatastoreSseConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfiguration">HealthlakeFhirDatastoreSseConfiguration</a>

The server-side encryption key configuration for a customer provided encryption key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/healthlake_fhir_datastore#sse_configuration HealthlakeFhirDatastore#sse_configuration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[HealthlakeFhirDatastoreTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTags">HealthlakeFhirDatastoreTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/healthlake_fhir_datastore#tags HealthlakeFhirDatastore#tags}.

---

### HealthlakeFhirDatastoreCreatedAt <a name="HealthlakeFhirDatastoreCreatedAt" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAt"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAt.Initializer"></a>

```python
from cdktn_provider_awscc import healthlake_fhir_datastore

healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAt()
```


### HealthlakeFhirDatastoreIdentityProviderConfiguration <a name="HealthlakeFhirDatastoreIdentityProviderConfiguration" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import healthlake_fhir_datastore

healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfiguration(
  authorization_strategy: str = None,
  fine_grained_authorization_enabled: bool | IResolvable = None,
  idp_lambda_arn: str = None,
  metadata: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfiguration.property.authorizationStrategy">authorization_strategy</a></code> | <code>str</code> | Type of Authorization Strategy. The two types of supported Authorization strategies are SMART_ON_FHIR_V1 and AWS_AUTH. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfiguration.property.fineGrainedAuthorizationEnabled">fine_grained_authorization_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Flag to indicate if fine-grained authorization will be enabled for the datastore. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfiguration.property.idpLambdaArn">idp_lambda_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the Lambda function that will be used to decode the access token created by the authorization server. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfiguration.property.metadata">metadata</a></code> | <code>str</code> | The JSON metadata elements for identity provider configuration. |

---

##### `authorization_strategy`<sup>Optional</sup> <a name="authorization_strategy" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfiguration.property.authorizationStrategy"></a>

```python
authorization_strategy: str
```

- *Type:* str

Type of Authorization Strategy. The two types of supported Authorization strategies are SMART_ON_FHIR_V1 and AWS_AUTH.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/healthlake_fhir_datastore#authorization_strategy HealthlakeFhirDatastore#authorization_strategy}

---

##### `fine_grained_authorization_enabled`<sup>Optional</sup> <a name="fine_grained_authorization_enabled" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfiguration.property.fineGrainedAuthorizationEnabled"></a>

```python
fine_grained_authorization_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Flag to indicate if fine-grained authorization will be enabled for the datastore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/healthlake_fhir_datastore#fine_grained_authorization_enabled HealthlakeFhirDatastore#fine_grained_authorization_enabled}

---

##### `idp_lambda_arn`<sup>Optional</sup> <a name="idp_lambda_arn" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfiguration.property.idpLambdaArn"></a>

```python
idp_lambda_arn: str
```

- *Type:* str

The Amazon Resource Name (ARN) of the Lambda function that will be used to decode the access token created by the authorization server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/healthlake_fhir_datastore#idp_lambda_arn HealthlakeFhirDatastore#idp_lambda_arn}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfiguration.property.metadata"></a>

```python
metadata: str
```

- *Type:* str

The JSON metadata elements for identity provider configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/healthlake_fhir_datastore#metadata HealthlakeFhirDatastore#metadata}

---

### HealthlakeFhirDatastorePreloadDataConfig <a name="HealthlakeFhirDatastorePreloadDataConfig" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfig.Initializer"></a>

```python
from cdktn_provider_awscc import healthlake_fhir_datastore

healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfig(
  preload_data_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfig.property.preloadDataType">preload_data_type</a></code> | <code>str</code> | The type of preloaded data. Only Synthea preloaded data is supported. |

---

##### `preload_data_type`<sup>Optional</sup> <a name="preload_data_type" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfig.property.preloadDataType"></a>

```python
preload_data_type: str
```

- *Type:* str

The type of preloaded data. Only Synthea preloaded data is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/healthlake_fhir_datastore#preload_data_type HealthlakeFhirDatastore#preload_data_type}

---

### HealthlakeFhirDatastoreSseConfiguration <a name="HealthlakeFhirDatastoreSseConfiguration" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import healthlake_fhir_datastore

healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfiguration(
  kms_encryption_config: HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfiguration.property.kmsEncryptionConfig">kms_encryption_config</a></code> | <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfig">HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfig</a></code> | The customer-managed-key (CMK) used when creating a Data Store. |

---

##### `kms_encryption_config`<sup>Optional</sup> <a name="kms_encryption_config" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfiguration.property.kmsEncryptionConfig"></a>

```python
kms_encryption_config: HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfig">HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfig</a>

The customer-managed-key (CMK) used when creating a Data Store.

If a customer owned key is not specified, an AWS owned key will be used for encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/healthlake_fhir_datastore#kms_encryption_config HealthlakeFhirDatastore#kms_encryption_config}

---

### HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfig <a name="HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfig" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfig.Initializer"></a>

```python
from cdktn_provider_awscc import healthlake_fhir_datastore

healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfig(
  cmk_type: str = None,
  kms_key_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfig.property.cmkType">cmk_type</a></code> | <code>str</code> | The type of customer-managed-key (CMK) used for encryption. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfig.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | The KMS encryption key id/alias used to encrypt the Data Store contents at rest. |

---

##### `cmk_type`<sup>Optional</sup> <a name="cmk_type" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfig.property.cmkType"></a>

```python
cmk_type: str
```

- *Type:* str

The type of customer-managed-key (CMK) used for encryption.

The two types of supported CMKs are customer owned CMKs and AWS owned CMKs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/healthlake_fhir_datastore#cmk_type HealthlakeFhirDatastore#cmk_type}

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfig.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

The KMS encryption key id/alias used to encrypt the Data Store contents at rest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/healthlake_fhir_datastore#kms_key_id HealthlakeFhirDatastore#kms_key_id}

---

### HealthlakeFhirDatastoreTags <a name="HealthlakeFhirDatastoreTags" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTags.Initializer"></a>

```python
from cdktn_provider_awscc import healthlake_fhir_datastore

healthlakeFhirDatastore.HealthlakeFhirDatastoreTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTags.property.key">key</a></code> | <code>str</code> | The key of the tag. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTags.property.value">value</a></code> | <code>str</code> | The value of the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/healthlake_fhir_datastore#key HealthlakeFhirDatastore#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/healthlake_fhir_datastore#value HealthlakeFhirDatastore#value}

---

## Classes <a name="Classes" id="Classes"></a>

### HealthlakeFhirDatastoreCreatedAtOutputReference <a name="HealthlakeFhirDatastoreCreatedAtOutputReference" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import healthlake_fhir_datastore

healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.property.nanos">nanos</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.property.seconds">seconds</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAt">HealthlakeFhirDatastoreCreatedAt</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `nanos`<sup>Required</sup> <a name="nanos" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.property.nanos"></a>

```python
nanos: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.property.seconds"></a>

```python
seconds: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.property.internalValue"></a>

```python
internal_value: HealthlakeFhirDatastoreCreatedAt
```

- *Type:* <a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAt">HealthlakeFhirDatastoreCreatedAt</a>

---


### HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference <a name="HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import healthlake_fhir_datastore

healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.resetAuthorizationStrategy">reset_authorization_strategy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.resetFineGrainedAuthorizationEnabled">reset_fine_grained_authorization_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.resetIdpLambdaArn">reset_idp_lambda_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.resetMetadata">reset_metadata</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_authorization_strategy` <a name="reset_authorization_strategy" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.resetAuthorizationStrategy"></a>

```python
def reset_authorization_strategy() -> None
```

##### `reset_fine_grained_authorization_enabled` <a name="reset_fine_grained_authorization_enabled" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.resetFineGrainedAuthorizationEnabled"></a>

```python
def reset_fine_grained_authorization_enabled() -> None
```

##### `reset_idp_lambda_arn` <a name="reset_idp_lambda_arn" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.resetIdpLambdaArn"></a>

```python
def reset_idp_lambda_arn() -> None
```

##### `reset_metadata` <a name="reset_metadata" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.resetMetadata"></a>

```python
def reset_metadata() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.property.authorizationStrategyInput">authorization_strategy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.property.fineGrainedAuthorizationEnabledInput">fine_grained_authorization_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.property.idpLambdaArnInput">idp_lambda_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.property.metadataInput">metadata_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.property.authorizationStrategy">authorization_strategy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.property.fineGrainedAuthorizationEnabled">fine_grained_authorization_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.property.idpLambdaArn">idp_lambda_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.property.metadata">metadata</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfiguration">HealthlakeFhirDatastoreIdentityProviderConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authorization_strategy_input`<sup>Optional</sup> <a name="authorization_strategy_input" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.property.authorizationStrategyInput"></a>

```python
authorization_strategy_input: str
```

- *Type:* str

---

##### `fine_grained_authorization_enabled_input`<sup>Optional</sup> <a name="fine_grained_authorization_enabled_input" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.property.fineGrainedAuthorizationEnabledInput"></a>

```python
fine_grained_authorization_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `idp_lambda_arn_input`<sup>Optional</sup> <a name="idp_lambda_arn_input" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.property.idpLambdaArnInput"></a>

```python
idp_lambda_arn_input: str
```

- *Type:* str

---

##### `metadata_input`<sup>Optional</sup> <a name="metadata_input" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.property.metadataInput"></a>

```python
metadata_input: str
```

- *Type:* str

---

##### `authorization_strategy`<sup>Required</sup> <a name="authorization_strategy" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.property.authorizationStrategy"></a>

```python
authorization_strategy: str
```

- *Type:* str

---

##### `fine_grained_authorization_enabled`<sup>Required</sup> <a name="fine_grained_authorization_enabled" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.property.fineGrainedAuthorizationEnabled"></a>

```python
fine_grained_authorization_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `idp_lambda_arn`<sup>Required</sup> <a name="idp_lambda_arn" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.property.idpLambdaArn"></a>

```python
idp_lambda_arn: str
```

- *Type:* str

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.property.metadata"></a>

```python
metadata: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | HealthlakeFhirDatastoreIdentityProviderConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfiguration">HealthlakeFhirDatastoreIdentityProviderConfiguration</a>

---


### HealthlakeFhirDatastorePreloadDataConfigOutputReference <a name="HealthlakeFhirDatastorePreloadDataConfigOutputReference" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import healthlake_fhir_datastore

healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.resetPreloadDataType">reset_preload_data_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_preload_data_type` <a name="reset_preload_data_type" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.resetPreloadDataType"></a>

```python
def reset_preload_data_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.property.preloadDataTypeInput">preload_data_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.property.preloadDataType">preload_data_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfig">HealthlakeFhirDatastorePreloadDataConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `preload_data_type_input`<sup>Optional</sup> <a name="preload_data_type_input" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.property.preloadDataTypeInput"></a>

```python
preload_data_type_input: str
```

- *Type:* str

---

##### `preload_data_type`<sup>Required</sup> <a name="preload_data_type" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.property.preloadDataType"></a>

```python
preload_data_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | HealthlakeFhirDatastorePreloadDataConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfig">HealthlakeFhirDatastorePreloadDataConfig</a>

---


### HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference <a name="HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import healthlake_fhir_datastore

healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.resetCmkType">reset_cmk_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.resetKmsKeyId">reset_kms_key_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cmk_type` <a name="reset_cmk_type" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.resetCmkType"></a>

```python
def reset_cmk_type() -> None
```

##### `reset_kms_key_id` <a name="reset_kms_key_id" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.resetKmsKeyId"></a>

```python
def reset_kms_key_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.property.cmkTypeInput">cmk_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.property.kmsKeyIdInput">kms_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.property.cmkType">cmk_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfig">HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cmk_type_input`<sup>Optional</sup> <a name="cmk_type_input" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.property.cmkTypeInput"></a>

```python
cmk_type_input: str
```

- *Type:* str

---

##### `kms_key_id_input`<sup>Optional</sup> <a name="kms_key_id_input" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.property.kmsKeyIdInput"></a>

```python
kms_key_id_input: str
```

- *Type:* str

---

##### `cmk_type`<sup>Required</sup> <a name="cmk_type" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.property.cmkType"></a>

```python
cmk_type: str
```

- *Type:* str

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfig">HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfig</a>

---


### HealthlakeFhirDatastoreSseConfigurationOutputReference <a name="HealthlakeFhirDatastoreSseConfigurationOutputReference" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import healthlake_fhir_datastore

healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.putKmsEncryptionConfig">put_kms_encryption_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.resetKmsEncryptionConfig">reset_kms_encryption_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_kms_encryption_config` <a name="put_kms_encryption_config" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.putKmsEncryptionConfig"></a>

```python
def put_kms_encryption_config(
  cmk_type: str = None,
  kms_key_id: str = None
) -> None
```

###### `cmk_type`<sup>Optional</sup> <a name="cmk_type" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.putKmsEncryptionConfig.parameter.cmkType"></a>

- *Type:* str

The type of customer-managed-key (CMK) used for encryption.

The two types of supported CMKs are customer owned CMKs and AWS owned CMKs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/healthlake_fhir_datastore#cmk_type HealthlakeFhirDatastore#cmk_type}

---

###### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.putKmsEncryptionConfig.parameter.kmsKeyId"></a>

- *Type:* str

The KMS encryption key id/alias used to encrypt the Data Store contents at rest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/healthlake_fhir_datastore#kms_key_id HealthlakeFhirDatastore#kms_key_id}

---

##### `reset_kms_encryption_config` <a name="reset_kms_encryption_config" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.resetKmsEncryptionConfig"></a>

```python
def reset_kms_encryption_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.property.kmsEncryptionConfig">kms_encryption_config</a></code> | <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference">HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.property.kmsEncryptionConfigInput">kms_encryption_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfig">HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfiguration">HealthlakeFhirDatastoreSseConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kms_encryption_config`<sup>Required</sup> <a name="kms_encryption_config" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.property.kmsEncryptionConfig"></a>

```python
kms_encryption_config: HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference">HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference</a>

---

##### `kms_encryption_config_input`<sup>Optional</sup> <a name="kms_encryption_config_input" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.property.kmsEncryptionConfigInput"></a>

```python
kms_encryption_config_input: IResolvable | HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfig">HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfig</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | HealthlakeFhirDatastoreSseConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfiguration">HealthlakeFhirDatastoreSseConfiguration</a>

---


### HealthlakeFhirDatastoreTagsList <a name="HealthlakeFhirDatastoreTagsList" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import healthlake_fhir_datastore

healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> HealthlakeFhirDatastoreTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTags">HealthlakeFhirDatastoreTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[HealthlakeFhirDatastoreTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTags">HealthlakeFhirDatastoreTags</a>]

---


### HealthlakeFhirDatastoreTagsOutputReference <a name="HealthlakeFhirDatastoreTagsOutputReference" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import healthlake_fhir_datastore

healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTags">HealthlakeFhirDatastoreTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | HealthlakeFhirDatastoreTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTags">HealthlakeFhirDatastoreTags</a>

---



