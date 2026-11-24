# `apiportalOrganizationDiscoveryConfiguration` Submodule <a name="`apiportalOrganizationDiscoveryConfiguration` Submodule" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiportalOrganizationDiscoveryConfiguration <a name="ApiportalOrganizationDiscoveryConfiguration" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_organization_discovery_configuration awscc_apiportal_organization_discovery_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import apiportal_organization_discovery_configuration

apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  discovery_sources: typing.List[str],
  discovery_features: typing.List[str] = None,
  discovery_filters: ApiportalOrganizationDiscoveryConfigurationDiscoveryFilters = None,
  tags: IResolvable | typing.List[ApiportalOrganizationDiscoveryConfigurationTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.Initializer.parameter.discoverySources">discovery_sources</a></code> | <code>typing.List[str]</code> | The AWS services whose resources are scanned to discover APIs. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.Initializer.parameter.discoveryFeatures">discovery_features</a></code> | <code>typing.List[str]</code> | Optional discovery capabilities to enable. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.Initializer.parameter.discoveryFilters">discovery_filters</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFilters">ApiportalOrganizationDiscoveryConfigurationDiscoveryFilters</a></code> | Scopes organization-wide discovery. Exactly one of ExclusionFilters or InclusionFilters is set. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTags">ApiportalOrganizationDiscoveryConfigurationTags</a>]</code> | The tags associated with the organization discovery configuration. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `discovery_sources`<sup>Required</sup> <a name="discovery_sources" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.Initializer.parameter.discoverySources"></a>

- *Type:* typing.List[str]

The AWS services whose resources are scanned to discover APIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_organization_discovery_configuration#discovery_sources ApiportalOrganizationDiscoveryConfiguration#discovery_sources}

---

##### `discovery_features`<sup>Optional</sup> <a name="discovery_features" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.Initializer.parameter.discoveryFeatures"></a>

- *Type:* typing.List[str]

Optional discovery capabilities to enable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_organization_discovery_configuration#discovery_features ApiportalOrganizationDiscoveryConfiguration#discovery_features}

---

##### `discovery_filters`<sup>Optional</sup> <a name="discovery_filters" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.Initializer.parameter.discoveryFilters"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFilters">ApiportalOrganizationDiscoveryConfigurationDiscoveryFilters</a>

Scopes organization-wide discovery. Exactly one of ExclusionFilters or InclusionFilters is set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_organization_discovery_configuration#discovery_filters ApiportalOrganizationDiscoveryConfiguration#discovery_filters}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTags">ApiportalOrganizationDiscoveryConfigurationTags</a>]

The tags associated with the organization discovery configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_organization_discovery_configuration#tags ApiportalOrganizationDiscoveryConfiguration#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.putDiscoveryFilters">put_discovery_filters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.resetDiscoveryFeatures">reset_discovery_features</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.resetDiscoveryFilters">reset_discovery_filters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_discovery_filters` <a name="put_discovery_filters" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.putDiscoveryFilters"></a>

```python
def put_discovery_filters(
  exclusion_filters: ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFilters = None,
  inclusion_filters: ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFilters = None
) -> None
```

###### `exclusion_filters`<sup>Optional</sup> <a name="exclusion_filters" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.putDiscoveryFilters.parameter.exclusionFilters"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFilters">ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFilters</a>

Resources matching any of these filters are excluded from discovery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_organization_discovery_configuration#exclusion_filters ApiportalOrganizationDiscoveryConfiguration#exclusion_filters}

---

###### `inclusion_filters`<sup>Optional</sup> <a name="inclusion_filters" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.putDiscoveryFilters.parameter.inclusionFilters"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFilters">ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFilters</a>

Only resources matching any of these filters are included in discovery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_organization_discovery_configuration#inclusion_filters ApiportalOrganizationDiscoveryConfiguration#inclusion_filters}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[ApiportalOrganizationDiscoveryConfigurationTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTags">ApiportalOrganizationDiscoveryConfigurationTags</a>]

---

##### `reset_discovery_features` <a name="reset_discovery_features" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.resetDiscoveryFeatures"></a>

```python
def reset_discovery_features() -> None
```

##### `reset_discovery_filters` <a name="reset_discovery_filters" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.resetDiscoveryFilters"></a>

```python
def reset_discovery_filters() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a ApiportalOrganizationDiscoveryConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.isConstruct"></a>

```python
from cdktn_provider_awscc import apiportal_organization_discovery_configuration

apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.isTerraformElement"></a>

```python
from cdktn_provider_awscc import apiportal_organization_discovery_configuration

apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.isTerraformResource"></a>

```python
from cdktn_provider_awscc import apiportal_organization_discovery_configuration

apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import apiportal_organization_discovery_configuration

apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a ApiportalOrganizationDiscoveryConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ApiportalOrganizationDiscoveryConfiguration to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ApiportalOrganizationDiscoveryConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_organization_discovery_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ApiportalOrganizationDiscoveryConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.discoveryConfigurationStatus">discovery_configuration_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.discoveryFilters">discovery_filters</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference">ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsList">ApiportalOrganizationDiscoveryConfigurationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.discoveryFeaturesInput">discovery_features_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.discoveryFiltersInput">discovery_filters_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFilters">ApiportalOrganizationDiscoveryConfigurationDiscoveryFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.discoverySourcesInput">discovery_sources_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTags">ApiportalOrganizationDiscoveryConfigurationTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.discoveryFeatures">discovery_features</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.discoverySources">discovery_sources</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `discovery_configuration_status`<sup>Required</sup> <a name="discovery_configuration_status" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.discoveryConfigurationStatus"></a>

```python
discovery_configuration_status: str
```

- *Type:* str

---

##### `discovery_filters`<sup>Required</sup> <a name="discovery_filters" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.discoveryFilters"></a>

```python
discovery_filters: ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference">ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.tags"></a>

```python
tags: ApiportalOrganizationDiscoveryConfigurationTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsList">ApiportalOrganizationDiscoveryConfigurationTagsList</a>

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `discovery_features_input`<sup>Optional</sup> <a name="discovery_features_input" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.discoveryFeaturesInput"></a>

```python
discovery_features_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `discovery_filters_input`<sup>Optional</sup> <a name="discovery_filters_input" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.discoveryFiltersInput"></a>

```python
discovery_filters_input: IResolvable | ApiportalOrganizationDiscoveryConfigurationDiscoveryFilters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFilters">ApiportalOrganizationDiscoveryConfigurationDiscoveryFilters</a>

---

##### `discovery_sources_input`<sup>Optional</sup> <a name="discovery_sources_input" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.discoverySourcesInput"></a>

```python
discovery_sources_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[ApiportalOrganizationDiscoveryConfigurationTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTags">ApiportalOrganizationDiscoveryConfigurationTags</a>]

---

##### `discovery_features`<sup>Required</sup> <a name="discovery_features" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.discoveryFeatures"></a>

```python
discovery_features: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `discovery_sources`<sup>Required</sup> <a name="discovery_sources" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.discoverySources"></a>

```python
discovery_sources: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ApiportalOrganizationDiscoveryConfigurationConfig <a name="ApiportalOrganizationDiscoveryConfigurationConfig" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationConfig.Initializer"></a>

```python
from cdktn_provider_awscc import apiportal_organization_discovery_configuration

apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  discovery_sources: typing.List[str],
  discovery_features: typing.List[str] = None,
  discovery_filters: ApiportalOrganizationDiscoveryConfigurationDiscoveryFilters = None,
  tags: IResolvable | typing.List[ApiportalOrganizationDiscoveryConfigurationTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationConfig.property.discoverySources">discovery_sources</a></code> | <code>typing.List[str]</code> | The AWS services whose resources are scanned to discover APIs. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationConfig.property.discoveryFeatures">discovery_features</a></code> | <code>typing.List[str]</code> | Optional discovery capabilities to enable. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationConfig.property.discoveryFilters">discovery_filters</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFilters">ApiportalOrganizationDiscoveryConfigurationDiscoveryFilters</a></code> | Scopes organization-wide discovery. Exactly one of ExclusionFilters or InclusionFilters is set. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTags">ApiportalOrganizationDiscoveryConfigurationTags</a>]</code> | The tags associated with the organization discovery configuration. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `discovery_sources`<sup>Required</sup> <a name="discovery_sources" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationConfig.property.discoverySources"></a>

```python
discovery_sources: typing.List[str]
```

- *Type:* typing.List[str]

The AWS services whose resources are scanned to discover APIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_organization_discovery_configuration#discovery_sources ApiportalOrganizationDiscoveryConfiguration#discovery_sources}

---

##### `discovery_features`<sup>Optional</sup> <a name="discovery_features" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationConfig.property.discoveryFeatures"></a>

```python
discovery_features: typing.List[str]
```

- *Type:* typing.List[str]

Optional discovery capabilities to enable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_organization_discovery_configuration#discovery_features ApiportalOrganizationDiscoveryConfiguration#discovery_features}

---

##### `discovery_filters`<sup>Optional</sup> <a name="discovery_filters" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationConfig.property.discoveryFilters"></a>

```python
discovery_filters: ApiportalOrganizationDiscoveryConfigurationDiscoveryFilters
```

- *Type:* <a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFilters">ApiportalOrganizationDiscoveryConfigurationDiscoveryFilters</a>

Scopes organization-wide discovery. Exactly one of ExclusionFilters or InclusionFilters is set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_organization_discovery_configuration#discovery_filters ApiportalOrganizationDiscoveryConfiguration#discovery_filters}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[ApiportalOrganizationDiscoveryConfigurationTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTags">ApiportalOrganizationDiscoveryConfigurationTags</a>]

The tags associated with the organization discovery configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_organization_discovery_configuration#tags ApiportalOrganizationDiscoveryConfiguration#tags}

---

### ApiportalOrganizationDiscoveryConfigurationDiscoveryFilters <a name="ApiportalOrganizationDiscoveryConfigurationDiscoveryFilters" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFilters.Initializer"></a>

```python
from cdktn_provider_awscc import apiportal_organization_discovery_configuration

apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFilters(
  exclusion_filters: ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFilters = None,
  inclusion_filters: ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFilters = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFilters.property.exclusionFilters">exclusion_filters</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFilters">ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFilters</a></code> | Resources matching any of these filters are excluded from discovery. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFilters.property.inclusionFilters">inclusion_filters</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFilters">ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFilters</a></code> | Only resources matching any of these filters are included in discovery. |

---

##### `exclusion_filters`<sup>Optional</sup> <a name="exclusion_filters" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFilters.property.exclusionFilters"></a>

```python
exclusion_filters: ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFilters
```

- *Type:* <a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFilters">ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFilters</a>

Resources matching any of these filters are excluded from discovery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_organization_discovery_configuration#exclusion_filters ApiportalOrganizationDiscoveryConfiguration#exclusion_filters}

---

##### `inclusion_filters`<sup>Optional</sup> <a name="inclusion_filters" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFilters.property.inclusionFilters"></a>

```python
inclusion_filters: ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFilters
```

- *Type:* <a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFilters">ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFilters</a>

Only resources matching any of these filters are included in discovery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_organization_discovery_configuration#inclusion_filters ApiportalOrganizationDiscoveryConfiguration#inclusion_filters}

---

### ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFilters <a name="ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFilters" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFilters.Initializer"></a>

```python
from cdktn_provider_awscc import apiportal_organization_discovery_configuration

apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFilters(
  account_ids: typing.List[str] = None,
  organizational_unit_ids: typing.List[str] = None,
  resource_arns: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFilters.property.accountIds">account_ids</a></code> | <code>typing.List[str]</code> | AWS account IDs to exclude from discovery. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFilters.property.organizationalUnitIds">organizational_unit_ids</a></code> | <code>typing.List[str]</code> | Organizational unit IDs to exclude from discovery. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFilters.property.resourceArns">resource_arns</a></code> | <code>typing.List[str]</code> | Resource ARNs to exclude from discovery. |

---

##### `account_ids`<sup>Optional</sup> <a name="account_ids" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFilters.property.accountIds"></a>

```python
account_ids: typing.List[str]
```

- *Type:* typing.List[str]

AWS account IDs to exclude from discovery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_organization_discovery_configuration#account_ids ApiportalOrganizationDiscoveryConfiguration#account_ids}

---

##### `organizational_unit_ids`<sup>Optional</sup> <a name="organizational_unit_ids" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFilters.property.organizationalUnitIds"></a>

```python
organizational_unit_ids: typing.List[str]
```

- *Type:* typing.List[str]

Organizational unit IDs to exclude from discovery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_organization_discovery_configuration#organizational_unit_ids ApiportalOrganizationDiscoveryConfiguration#organizational_unit_ids}

---

##### `resource_arns`<sup>Optional</sup> <a name="resource_arns" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFilters.property.resourceArns"></a>

```python
resource_arns: typing.List[str]
```

- *Type:* typing.List[str]

Resource ARNs to exclude from discovery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_organization_discovery_configuration#resource_arns ApiportalOrganizationDiscoveryConfiguration#resource_arns}

---

### ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFilters <a name="ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFilters" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFilters.Initializer"></a>

```python
from cdktn_provider_awscc import apiportal_organization_discovery_configuration

apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFilters(
  account_ids: typing.List[str] = None,
  organizational_unit_ids: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFilters.property.accountIds">account_ids</a></code> | <code>typing.List[str]</code> | AWS account IDs to include in discovery. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFilters.property.organizationalUnitIds">organizational_unit_ids</a></code> | <code>typing.List[str]</code> | Organizational unit IDs to include in discovery. |

---

##### `account_ids`<sup>Optional</sup> <a name="account_ids" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFilters.property.accountIds"></a>

```python
account_ids: typing.List[str]
```

- *Type:* typing.List[str]

AWS account IDs to include in discovery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_organization_discovery_configuration#account_ids ApiportalOrganizationDiscoveryConfiguration#account_ids}

---

##### `organizational_unit_ids`<sup>Optional</sup> <a name="organizational_unit_ids" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFilters.property.organizationalUnitIds"></a>

```python
organizational_unit_ids: typing.List[str]
```

- *Type:* typing.List[str]

Organizational unit IDs to include in discovery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_organization_discovery_configuration#organizational_unit_ids ApiportalOrganizationDiscoveryConfiguration#organizational_unit_ids}

---

### ApiportalOrganizationDiscoveryConfigurationTags <a name="ApiportalOrganizationDiscoveryConfigurationTags" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTags.Initializer"></a>

```python
from cdktn_provider_awscc import apiportal_organization_discovery_configuration

apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_organization_discovery_configuration#key ApiportalOrganizationDiscoveryConfiguration#key}. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_organization_discovery_configuration#value ApiportalOrganizationDiscoveryConfiguration#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_organization_discovery_configuration#key ApiportalOrganizationDiscoveryConfiguration#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_organization_discovery_configuration#value ApiportalOrganizationDiscoveryConfiguration#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference <a name="ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import apiportal_organization_discovery_configuration

apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.resetAccountIds">reset_account_ids</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.resetOrganizationalUnitIds">reset_organizational_unit_ids</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.resetResourceArns">reset_resource_arns</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_account_ids` <a name="reset_account_ids" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.resetAccountIds"></a>

```python
def reset_account_ids() -> None
```

##### `reset_organizational_unit_ids` <a name="reset_organizational_unit_ids" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.resetOrganizationalUnitIds"></a>

```python
def reset_organizational_unit_ids() -> None
```

##### `reset_resource_arns` <a name="reset_resource_arns" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.resetResourceArns"></a>

```python
def reset_resource_arns() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.property.accountIdsInput">account_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.property.organizationalUnitIdsInput">organizational_unit_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.property.resourceArnsInput">resource_arns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.property.accountIds">account_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.property.organizationalUnitIds">organizational_unit_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.property.resourceArns">resource_arns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFilters">ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFilters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `account_ids_input`<sup>Optional</sup> <a name="account_ids_input" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.property.accountIdsInput"></a>

```python
account_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `organizational_unit_ids_input`<sup>Optional</sup> <a name="organizational_unit_ids_input" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.property.organizationalUnitIdsInput"></a>

```python
organizational_unit_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `resource_arns_input`<sup>Optional</sup> <a name="resource_arns_input" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.property.resourceArnsInput"></a>

```python
resource_arns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `account_ids`<sup>Required</sup> <a name="account_ids" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.property.accountIds"></a>

```python
account_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `organizational_unit_ids`<sup>Required</sup> <a name="organizational_unit_ids" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.property.organizationalUnitIds"></a>

```python
organizational_unit_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `resource_arns`<sup>Required</sup> <a name="resource_arns" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.property.resourceArns"></a>

```python
resource_arns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFilters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFilters">ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFilters</a>

---


### ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference <a name="ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import apiportal_organization_discovery_configuration

apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.resetAccountIds">reset_account_ids</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.resetOrganizationalUnitIds">reset_organizational_unit_ids</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_account_ids` <a name="reset_account_ids" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.resetAccountIds"></a>

```python
def reset_account_ids() -> None
```

##### `reset_organizational_unit_ids` <a name="reset_organizational_unit_ids" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.resetOrganizationalUnitIds"></a>

```python
def reset_organizational_unit_ids() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.property.accountIdsInput">account_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.property.organizationalUnitIdsInput">organizational_unit_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.property.accountIds">account_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.property.organizationalUnitIds">organizational_unit_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFilters">ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFilters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `account_ids_input`<sup>Optional</sup> <a name="account_ids_input" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.property.accountIdsInput"></a>

```python
account_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `organizational_unit_ids_input`<sup>Optional</sup> <a name="organizational_unit_ids_input" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.property.organizationalUnitIdsInput"></a>

```python
organizational_unit_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `account_ids`<sup>Required</sup> <a name="account_ids" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.property.accountIds"></a>

```python
account_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `organizational_unit_ids`<sup>Required</sup> <a name="organizational_unit_ids" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.property.organizationalUnitIds"></a>

```python
organizational_unit_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFilters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFilters">ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFilters</a>

---


### ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference <a name="ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import apiportal_organization_discovery_configuration

apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.putExclusionFilters">put_exclusion_filters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.putInclusionFilters">put_inclusion_filters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.resetExclusionFilters">reset_exclusion_filters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.resetInclusionFilters">reset_inclusion_filters</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_exclusion_filters` <a name="put_exclusion_filters" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.putExclusionFilters"></a>

```python
def put_exclusion_filters(
  account_ids: typing.List[str] = None,
  organizational_unit_ids: typing.List[str] = None,
  resource_arns: typing.List[str] = None
) -> None
```

###### `account_ids`<sup>Optional</sup> <a name="account_ids" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.putExclusionFilters.parameter.accountIds"></a>

- *Type:* typing.List[str]

AWS account IDs to exclude from discovery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_organization_discovery_configuration#account_ids ApiportalOrganizationDiscoveryConfiguration#account_ids}

---

###### `organizational_unit_ids`<sup>Optional</sup> <a name="organizational_unit_ids" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.putExclusionFilters.parameter.organizationalUnitIds"></a>

- *Type:* typing.List[str]

Organizational unit IDs to exclude from discovery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_organization_discovery_configuration#organizational_unit_ids ApiportalOrganizationDiscoveryConfiguration#organizational_unit_ids}

---

###### `resource_arns`<sup>Optional</sup> <a name="resource_arns" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.putExclusionFilters.parameter.resourceArns"></a>

- *Type:* typing.List[str]

Resource ARNs to exclude from discovery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_organization_discovery_configuration#resource_arns ApiportalOrganizationDiscoveryConfiguration#resource_arns}

---

##### `put_inclusion_filters` <a name="put_inclusion_filters" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.putInclusionFilters"></a>

```python
def put_inclusion_filters(
  account_ids: typing.List[str] = None,
  organizational_unit_ids: typing.List[str] = None
) -> None
```

###### `account_ids`<sup>Optional</sup> <a name="account_ids" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.putInclusionFilters.parameter.accountIds"></a>

- *Type:* typing.List[str]

AWS account IDs to include in discovery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_organization_discovery_configuration#account_ids ApiportalOrganizationDiscoveryConfiguration#account_ids}

---

###### `organizational_unit_ids`<sup>Optional</sup> <a name="organizational_unit_ids" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.putInclusionFilters.parameter.organizationalUnitIds"></a>

- *Type:* typing.List[str]

Organizational unit IDs to include in discovery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_organization_discovery_configuration#organizational_unit_ids ApiportalOrganizationDiscoveryConfiguration#organizational_unit_ids}

---

##### `reset_exclusion_filters` <a name="reset_exclusion_filters" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.resetExclusionFilters"></a>

```python
def reset_exclusion_filters() -> None
```

##### `reset_inclusion_filters` <a name="reset_inclusion_filters" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.resetInclusionFilters"></a>

```python
def reset_inclusion_filters() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.property.exclusionFilters">exclusion_filters</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference">ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.property.inclusionFilters">inclusion_filters</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference">ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.property.exclusionFiltersInput">exclusion_filters_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFilters">ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.property.inclusionFiltersInput">inclusion_filters_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFilters">ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFilters">ApiportalOrganizationDiscoveryConfigurationDiscoveryFilters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `exclusion_filters`<sup>Required</sup> <a name="exclusion_filters" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.property.exclusionFilters"></a>

```python
exclusion_filters: ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference">ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference</a>

---

##### `inclusion_filters`<sup>Required</sup> <a name="inclusion_filters" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.property.inclusionFilters"></a>

```python
inclusion_filters: ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference">ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference</a>

---

##### `exclusion_filters_input`<sup>Optional</sup> <a name="exclusion_filters_input" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.property.exclusionFiltersInput"></a>

```python
exclusion_filters_input: IResolvable | ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFilters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFilters">ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFilters</a>

---

##### `inclusion_filters_input`<sup>Optional</sup> <a name="inclusion_filters_input" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.property.inclusionFiltersInput"></a>

```python
inclusion_filters_input: IResolvable | ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFilters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFilters">ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFilters</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ApiportalOrganizationDiscoveryConfigurationDiscoveryFilters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFilters">ApiportalOrganizationDiscoveryConfigurationDiscoveryFilters</a>

---


### ApiportalOrganizationDiscoveryConfigurationTagsList <a name="ApiportalOrganizationDiscoveryConfigurationTagsList" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import apiportal_organization_discovery_configuration

apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ApiportalOrganizationDiscoveryConfigurationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTags">ApiportalOrganizationDiscoveryConfigurationTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ApiportalOrganizationDiscoveryConfigurationTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTags">ApiportalOrganizationDiscoveryConfigurationTags</a>]

---


### ApiportalOrganizationDiscoveryConfigurationTagsOutputReference <a name="ApiportalOrganizationDiscoveryConfigurationTagsOutputReference" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import apiportal_organization_discovery_configuration

apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTags">ApiportalOrganizationDiscoveryConfigurationTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ApiportalOrganizationDiscoveryConfigurationTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTags">ApiportalOrganizationDiscoveryConfigurationTags</a>

---



