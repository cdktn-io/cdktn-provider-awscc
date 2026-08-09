# `appconfigHostedConfigurationVersion` Submodule <a name="`appconfigHostedConfigurationVersion` Submodule" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppconfigHostedConfigurationVersion <a name="AppconfigHostedConfigurationVersion" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_hosted_configuration_version awscc_appconfig_hosted_configuration_version}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.Initializer"></a>

```python
from cdktn_provider_awscc import appconfig_hosted_configuration_version

appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  application_id: str,
  configuration_profile_id: str,
  content: str,
  content_type: str,
  description: str = None,
  latest_version_number: typing.Union[int, float] = None,
  version_label: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.Initializer.parameter.applicationId">application_id</a></code> | <code>str</code> | The application ID. |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.Initializer.parameter.configurationProfileId">configuration_profile_id</a></code> | <code>str</code> | The configuration profile ID. |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.Initializer.parameter.content">content</a></code> | <code>str</code> | The content of the configuration or the configuration data. |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.Initializer.parameter.contentType">content_type</a></code> | <code>str</code> | A standard MIME type describing the format of the configuration content. |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.Initializer.parameter.description">description</a></code> | <code>str</code> | A description of the hosted configuration version. |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.Initializer.parameter.latestVersionNumber">latest_version_number</a></code> | <code>typing.Union[int, float]</code> | An optional locking token used to prevent race conditions from overwriting configuration updates when creating a new version. |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.Initializer.parameter.versionLabel">version_label</a></code> | <code>str</code> | A user-defined label for an AWS AppConfig hosted configuration version. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `application_id`<sup>Required</sup> <a name="application_id" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.Initializer.parameter.applicationId"></a>

- *Type:* str

The application ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_hosted_configuration_version#application_id AppconfigHostedConfigurationVersion#application_id}

---

##### `configuration_profile_id`<sup>Required</sup> <a name="configuration_profile_id" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.Initializer.parameter.configurationProfileId"></a>

- *Type:* str

The configuration profile ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_hosted_configuration_version#configuration_profile_id AppconfigHostedConfigurationVersion#configuration_profile_id}

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.Initializer.parameter.content"></a>

- *Type:* str

The content of the configuration or the configuration data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_hosted_configuration_version#content AppconfigHostedConfigurationVersion#content}

---

##### `content_type`<sup>Required</sup> <a name="content_type" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.Initializer.parameter.contentType"></a>

- *Type:* str

A standard MIME type describing the format of the configuration content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_hosted_configuration_version#content_type AppconfigHostedConfigurationVersion#content_type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.Initializer.parameter.description"></a>

- *Type:* str

A description of the hosted configuration version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_hosted_configuration_version#description AppconfigHostedConfigurationVersion#description}

---

##### `latest_version_number`<sup>Optional</sup> <a name="latest_version_number" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.Initializer.parameter.latestVersionNumber"></a>

- *Type:* typing.Union[int, float]

An optional locking token used to prevent race conditions from overwriting configuration updates when creating a new version.

To ensure your data is not overwritten when creating multiple hosted configuration versions in rapid succession, specify the version number of the latest hosted configuration version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_hosted_configuration_version#latest_version_number AppconfigHostedConfigurationVersion#latest_version_number}

---

##### `version_label`<sup>Optional</sup> <a name="version_label" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.Initializer.parameter.versionLabel"></a>

- *Type:* str

A user-defined label for an AWS AppConfig hosted configuration version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_hosted_configuration_version#version_label AppconfigHostedConfigurationVersion#version_label}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.resetLatestVersionNumber">reset_latest_version_number</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.resetVersionLabel">reset_version_label</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_latest_version_number` <a name="reset_latest_version_number" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.resetLatestVersionNumber"></a>

```python
def reset_latest_version_number() -> None
```

##### `reset_version_label` <a name="reset_version_label" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.resetVersionLabel"></a>

```python
def reset_version_label() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a AppconfigHostedConfigurationVersion resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.isConstruct"></a>

```python
from cdktn_provider_awscc import appconfig_hosted_configuration_version

appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.isTerraformElement"></a>

```python
from cdktn_provider_awscc import appconfig_hosted_configuration_version

appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.isTerraformResource"></a>

```python
from cdktn_provider_awscc import appconfig_hosted_configuration_version

appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import appconfig_hosted_configuration_version

appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a AppconfigHostedConfigurationVersion resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the AppconfigHostedConfigurationVersion to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing AppconfigHostedConfigurationVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_hosted_configuration_version#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the AppconfigHostedConfigurationVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.versionNumber">version_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.applicationIdInput">application_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.configurationProfileIdInput">configuration_profile_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.contentInput">content_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.contentTypeInput">content_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.latestVersionNumberInput">latest_version_number_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.versionLabelInput">version_label_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.applicationId">application_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.configurationProfileId">configuration_profile_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.content">content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.contentType">content_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.latestVersionNumber">latest_version_number</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.versionLabel">version_label</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `version_number`<sup>Required</sup> <a name="version_number" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.versionNumber"></a>

```python
version_number: str
```

- *Type:* str

---

##### `application_id_input`<sup>Optional</sup> <a name="application_id_input" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.applicationIdInput"></a>

```python
application_id_input: str
```

- *Type:* str

---

##### `configuration_profile_id_input`<sup>Optional</sup> <a name="configuration_profile_id_input" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.configurationProfileIdInput"></a>

```python
configuration_profile_id_input: str
```

- *Type:* str

---

##### `content_input`<sup>Optional</sup> <a name="content_input" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.contentInput"></a>

```python
content_input: str
```

- *Type:* str

---

##### `content_type_input`<sup>Optional</sup> <a name="content_type_input" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.contentTypeInput"></a>

```python
content_type_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `latest_version_number_input`<sup>Optional</sup> <a name="latest_version_number_input" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.latestVersionNumberInput"></a>

```python
latest_version_number_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `version_label_input`<sup>Optional</sup> <a name="version_label_input" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.versionLabelInput"></a>

```python
version_label_input: str
```

- *Type:* str

---

##### `application_id`<sup>Required</sup> <a name="application_id" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.applicationId"></a>

```python
application_id: str
```

- *Type:* str

---

##### `configuration_profile_id`<sup>Required</sup> <a name="configuration_profile_id" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.configurationProfileId"></a>

```python
configuration_profile_id: str
```

- *Type:* str

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.content"></a>

```python
content: str
```

- *Type:* str

---

##### `content_type`<sup>Required</sup> <a name="content_type" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.contentType"></a>

```python
content_type: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `latest_version_number`<sup>Required</sup> <a name="latest_version_number" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.latestVersionNumber"></a>

```python
latest_version_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `version_label`<sup>Required</sup> <a name="version_label" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.versionLabel"></a>

```python
version_label: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AppconfigHostedConfigurationVersionConfig <a name="AppconfigHostedConfigurationVersionConfig" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersionConfig.Initializer"></a>

```python
from cdktn_provider_awscc import appconfig_hosted_configuration_version

appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersionConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  application_id: str,
  configuration_profile_id: str,
  content: str,
  content_type: str,
  description: str = None,
  latest_version_number: typing.Union[int, float] = None,
  version_label: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersionConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersionConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersionConfig.property.applicationId">application_id</a></code> | <code>str</code> | The application ID. |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersionConfig.property.configurationProfileId">configuration_profile_id</a></code> | <code>str</code> | The configuration profile ID. |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersionConfig.property.content">content</a></code> | <code>str</code> | The content of the configuration or the configuration data. |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersionConfig.property.contentType">content_type</a></code> | <code>str</code> | A standard MIME type describing the format of the configuration content. |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersionConfig.property.description">description</a></code> | <code>str</code> | A description of the hosted configuration version. |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersionConfig.property.latestVersionNumber">latest_version_number</a></code> | <code>typing.Union[int, float]</code> | An optional locking token used to prevent race conditions from overwriting configuration updates when creating a new version. |
| <code><a href="#@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersionConfig.property.versionLabel">version_label</a></code> | <code>str</code> | A user-defined label for an AWS AppConfig hosted configuration version. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersionConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersionConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersionConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `application_id`<sup>Required</sup> <a name="application_id" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersionConfig.property.applicationId"></a>

```python
application_id: str
```

- *Type:* str

The application ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_hosted_configuration_version#application_id AppconfigHostedConfigurationVersion#application_id}

---

##### `configuration_profile_id`<sup>Required</sup> <a name="configuration_profile_id" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersionConfig.property.configurationProfileId"></a>

```python
configuration_profile_id: str
```

- *Type:* str

The configuration profile ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_hosted_configuration_version#configuration_profile_id AppconfigHostedConfigurationVersion#configuration_profile_id}

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersionConfig.property.content"></a>

```python
content: str
```

- *Type:* str

The content of the configuration or the configuration data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_hosted_configuration_version#content AppconfigHostedConfigurationVersion#content}

---

##### `content_type`<sup>Required</sup> <a name="content_type" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersionConfig.property.contentType"></a>

```python
content_type: str
```

- *Type:* str

A standard MIME type describing the format of the configuration content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_hosted_configuration_version#content_type AppconfigHostedConfigurationVersion#content_type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersionConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A description of the hosted configuration version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_hosted_configuration_version#description AppconfigHostedConfigurationVersion#description}

---

##### `latest_version_number`<sup>Optional</sup> <a name="latest_version_number" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersionConfig.property.latestVersionNumber"></a>

```python
latest_version_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

An optional locking token used to prevent race conditions from overwriting configuration updates when creating a new version.

To ensure your data is not overwritten when creating multiple hosted configuration versions in rapid succession, specify the version number of the latest hosted configuration version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_hosted_configuration_version#latest_version_number AppconfigHostedConfigurationVersion#latest_version_number}

---

##### `version_label`<sup>Optional</sup> <a name="version_label" id="@cdktn/provider-awscc.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersionConfig.property.versionLabel"></a>

```python
version_label: str
```

- *Type:* str

A user-defined label for an AWS AppConfig hosted configuration version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_hosted_configuration_version#version_label AppconfigHostedConfigurationVersion#version_label}

---



