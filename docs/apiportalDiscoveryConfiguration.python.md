# `apiportalDiscoveryConfiguration` Submodule <a name="`apiportalDiscoveryConfiguration` Submodule" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiportalDiscoveryConfiguration <a name="ApiportalDiscoveryConfiguration" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_discovery_configuration awscc_apiportal_discovery_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import apiportal_discovery_configuration

apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration(
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
  excluded_resources: typing.List[str] = None,
  tags: IResolvable | typing.List[ApiportalDiscoveryConfigurationTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.Initializer.parameter.discoverySources">discovery_sources</a></code> | <code>typing.List[str]</code> | The AWS services whose resources are scanned to discover APIs. |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.Initializer.parameter.discoveryFeatures">discovery_features</a></code> | <code>typing.List[str]</code> | Optional discovery capabilities to enable. |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.Initializer.parameter.excludedResources">excluded_resources</a></code> | <code>typing.List[str]</code> | ARNs of resources to exclude from discovery. |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTags">ApiportalDiscoveryConfigurationTags</a>]</code> | The tags associated with the discovery configuration. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `discovery_sources`<sup>Required</sup> <a name="discovery_sources" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.Initializer.parameter.discoverySources"></a>

- *Type:* typing.List[str]

The AWS services whose resources are scanned to discover APIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_discovery_configuration#discovery_sources ApiportalDiscoveryConfiguration#discovery_sources}

---

##### `discovery_features`<sup>Optional</sup> <a name="discovery_features" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.Initializer.parameter.discoveryFeatures"></a>

- *Type:* typing.List[str]

Optional discovery capabilities to enable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_discovery_configuration#discovery_features ApiportalDiscoveryConfiguration#discovery_features}

---

##### `excluded_resources`<sup>Optional</sup> <a name="excluded_resources" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.Initializer.parameter.excludedResources"></a>

- *Type:* typing.List[str]

ARNs of resources to exclude from discovery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_discovery_configuration#excluded_resources ApiportalDiscoveryConfiguration#excluded_resources}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTags">ApiportalDiscoveryConfigurationTags</a>]

The tags associated with the discovery configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_discovery_configuration#tags ApiportalDiscoveryConfiguration#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.resetDiscoveryFeatures">reset_discovery_features</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.resetExcludedResources">reset_excluded_resources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[ApiportalDiscoveryConfigurationTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTags">ApiportalDiscoveryConfigurationTags</a>]

---

##### `reset_discovery_features` <a name="reset_discovery_features" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.resetDiscoveryFeatures"></a>

```python
def reset_discovery_features() -> None
```

##### `reset_excluded_resources` <a name="reset_excluded_resources" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.resetExcludedResources"></a>

```python
def reset_excluded_resources() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a ApiportalDiscoveryConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.isConstruct"></a>

```python
from cdktn_provider_awscc import apiportal_discovery_configuration

apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.isTerraformElement"></a>

```python
from cdktn_provider_awscc import apiportal_discovery_configuration

apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.isTerraformResource"></a>

```python
from cdktn_provider_awscc import apiportal_discovery_configuration

apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import apiportal_discovery_configuration

apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a ApiportalDiscoveryConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ApiportalDiscoveryConfiguration to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ApiportalDiscoveryConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_discovery_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ApiportalDiscoveryConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.property.discoveryConfigurationStatus">discovery_configuration_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsList">ApiportalDiscoveryConfigurationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.property.discoveryFeaturesInput">discovery_features_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.property.discoverySourcesInput">discovery_sources_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.property.excludedResourcesInput">excluded_resources_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTags">ApiportalDiscoveryConfigurationTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.property.discoveryFeatures">discovery_features</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.property.discoverySources">discovery_sources</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.property.excludedResources">excluded_resources</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `discovery_configuration_status`<sup>Required</sup> <a name="discovery_configuration_status" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.property.discoveryConfigurationStatus"></a>

```python
discovery_configuration_status: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.property.tags"></a>

```python
tags: ApiportalDiscoveryConfigurationTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsList">ApiportalDiscoveryConfigurationTagsList</a>

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `discovery_features_input`<sup>Optional</sup> <a name="discovery_features_input" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.property.discoveryFeaturesInput"></a>

```python
discovery_features_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `discovery_sources_input`<sup>Optional</sup> <a name="discovery_sources_input" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.property.discoverySourcesInput"></a>

```python
discovery_sources_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `excluded_resources_input`<sup>Optional</sup> <a name="excluded_resources_input" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.property.excludedResourcesInput"></a>

```python
excluded_resources_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[ApiportalDiscoveryConfigurationTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTags">ApiportalDiscoveryConfigurationTags</a>]

---

##### `discovery_features`<sup>Required</sup> <a name="discovery_features" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.property.discoveryFeatures"></a>

```python
discovery_features: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `discovery_sources`<sup>Required</sup> <a name="discovery_sources" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.property.discoverySources"></a>

```python
discovery_sources: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `excluded_resources`<sup>Required</sup> <a name="excluded_resources" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.property.excludedResources"></a>

```python
excluded_resources: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfiguration.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ApiportalDiscoveryConfigurationConfig <a name="ApiportalDiscoveryConfigurationConfig" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationConfig.Initializer"></a>

```python
from cdktn_provider_awscc import apiportal_discovery_configuration

apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  discovery_sources: typing.List[str],
  discovery_features: typing.List[str] = None,
  excluded_resources: typing.List[str] = None,
  tags: IResolvable | typing.List[ApiportalDiscoveryConfigurationTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationConfig.property.discoverySources">discovery_sources</a></code> | <code>typing.List[str]</code> | The AWS services whose resources are scanned to discover APIs. |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationConfig.property.discoveryFeatures">discovery_features</a></code> | <code>typing.List[str]</code> | Optional discovery capabilities to enable. |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationConfig.property.excludedResources">excluded_resources</a></code> | <code>typing.List[str]</code> | ARNs of resources to exclude from discovery. |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTags">ApiportalDiscoveryConfigurationTags</a>]</code> | The tags associated with the discovery configuration. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `discovery_sources`<sup>Required</sup> <a name="discovery_sources" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationConfig.property.discoverySources"></a>

```python
discovery_sources: typing.List[str]
```

- *Type:* typing.List[str]

The AWS services whose resources are scanned to discover APIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_discovery_configuration#discovery_sources ApiportalDiscoveryConfiguration#discovery_sources}

---

##### `discovery_features`<sup>Optional</sup> <a name="discovery_features" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationConfig.property.discoveryFeatures"></a>

```python
discovery_features: typing.List[str]
```

- *Type:* typing.List[str]

Optional discovery capabilities to enable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_discovery_configuration#discovery_features ApiportalDiscoveryConfiguration#discovery_features}

---

##### `excluded_resources`<sup>Optional</sup> <a name="excluded_resources" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationConfig.property.excludedResources"></a>

```python
excluded_resources: typing.List[str]
```

- *Type:* typing.List[str]

ARNs of resources to exclude from discovery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_discovery_configuration#excluded_resources ApiportalDiscoveryConfiguration#excluded_resources}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[ApiportalDiscoveryConfigurationTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTags">ApiportalDiscoveryConfigurationTags</a>]

The tags associated with the discovery configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_discovery_configuration#tags ApiportalDiscoveryConfiguration#tags}

---

### ApiportalDiscoveryConfigurationTags <a name="ApiportalDiscoveryConfigurationTags" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTags.Initializer"></a>

```python
from cdktn_provider_awscc import apiportal_discovery_configuration

apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_discovery_configuration#key ApiportalDiscoveryConfiguration#key}. |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_discovery_configuration#value ApiportalDiscoveryConfiguration#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_discovery_configuration#key ApiportalDiscoveryConfiguration#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_discovery_configuration#value ApiportalDiscoveryConfiguration#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApiportalDiscoveryConfigurationTagsList <a name="ApiportalDiscoveryConfigurationTagsList" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import apiportal_discovery_configuration

apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ApiportalDiscoveryConfigurationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTags">ApiportalDiscoveryConfigurationTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ApiportalDiscoveryConfigurationTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTags">ApiportalDiscoveryConfigurationTags</a>]

---


### ApiportalDiscoveryConfigurationTagsOutputReference <a name="ApiportalDiscoveryConfigurationTagsOutputReference" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import apiportal_discovery_configuration

apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTags">ApiportalDiscoveryConfigurationTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ApiportalDiscoveryConfigurationTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apiportalDiscoveryConfiguration.ApiportalDiscoveryConfigurationTags">ApiportalDiscoveryConfigurationTags</a>

---



