# `appintegrationsApplication` Submodule <a name="`appintegrationsApplication` Submodule" id="@cdktn/provider-awscc.appintegrationsApplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppintegrationsApplication <a name="AppintegrationsApplication" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appintegrations_application awscc_appintegrations_application}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.Initializer"></a>

```python
from cdktn_provider_awscc import appintegrations_application

appintegrationsApplication.AppintegrationsApplication(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  application_source_config: AppintegrationsApplicationApplicationSourceConfig,
  name: str,
  namespace: str,
  application_config: AppintegrationsApplicationApplicationConfig = None,
  application_type: str = None,
  description: str = None,
  iframe_config: AppintegrationsApplicationIframeConfig = None,
  initialization_timeout: typing.Union[int, float] = None,
  is_service: bool | IResolvable = None,
  permissions: typing.List[str] = None,
  tags: IResolvable | typing.List[AppintegrationsApplicationTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.Initializer.parameter.applicationSourceConfig">application_source_config</a></code> | <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfig">AppintegrationsApplicationApplicationSourceConfig</a></code> | Application source config. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the application. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | The namespace of the application. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.Initializer.parameter.applicationConfig">application_config</a></code> | <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfig">AppintegrationsApplicationApplicationConfig</a></code> | The application configuration. Cannot be used when IsService is true. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.Initializer.parameter.applicationType">application_type</a></code> | <code>str</code> | The type of application. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.Initializer.parameter.description">description</a></code> | <code>str</code> | The application description. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.Initializer.parameter.iframeConfig">iframe_config</a></code> | <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfig">AppintegrationsApplicationIframeConfig</a></code> | The iframe configuration. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.Initializer.parameter.initializationTimeout">initialization_timeout</a></code> | <code>typing.Union[int, float]</code> | The initialization timeout in milliseconds. Required when IsService is true. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.Initializer.parameter.isService">is_service</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates if the application is a service. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.Initializer.parameter.permissions">permissions</a></code> | <code>typing.List[str]</code> | The configuration of events or requests that the application has access to. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTags">AppintegrationsApplicationTags</a>]</code> | The tags (keys and values) associated with the application. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `application_source_config`<sup>Required</sup> <a name="application_source_config" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.Initializer.parameter.applicationSourceConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfig">AppintegrationsApplicationApplicationSourceConfig</a>

Application source config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appintegrations_application#application_source_config AppintegrationsApplication#application_source_config}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.Initializer.parameter.name"></a>

- *Type:* str

The name of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appintegrations_application#name AppintegrationsApplication#name}

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.Initializer.parameter.namespace"></a>

- *Type:* str

The namespace of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appintegrations_application#namespace AppintegrationsApplication#namespace}

---

##### `application_config`<sup>Optional</sup> <a name="application_config" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.Initializer.parameter.applicationConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfig">AppintegrationsApplicationApplicationConfig</a>

The application configuration. Cannot be used when IsService is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appintegrations_application#application_config AppintegrationsApplication#application_config}

---

##### `application_type`<sup>Optional</sup> <a name="application_type" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.Initializer.parameter.applicationType"></a>

- *Type:* str

The type of application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appintegrations_application#application_type AppintegrationsApplication#application_type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.Initializer.parameter.description"></a>

- *Type:* str

The application description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appintegrations_application#description AppintegrationsApplication#description}

---

##### `iframe_config`<sup>Optional</sup> <a name="iframe_config" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.Initializer.parameter.iframeConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfig">AppintegrationsApplicationIframeConfig</a>

The iframe configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appintegrations_application#iframe_config AppintegrationsApplication#iframe_config}

---

##### `initialization_timeout`<sup>Optional</sup> <a name="initialization_timeout" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.Initializer.parameter.initializationTimeout"></a>

- *Type:* typing.Union[int, float]

The initialization timeout in milliseconds. Required when IsService is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appintegrations_application#initialization_timeout AppintegrationsApplication#initialization_timeout}

---

##### `is_service`<sup>Optional</sup> <a name="is_service" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.Initializer.parameter.isService"></a>

- *Type:* bool | cdktn.IResolvable

Indicates if the application is a service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appintegrations_application#is_service AppintegrationsApplication#is_service}

---

##### `permissions`<sup>Optional</sup> <a name="permissions" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.Initializer.parameter.permissions"></a>

- *Type:* typing.List[str]

The configuration of events or requests that the application has access to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appintegrations_application#permissions AppintegrationsApplication#permissions}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTags">AppintegrationsApplicationTags</a>]

The tags (keys and values) associated with the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appintegrations_application#tags AppintegrationsApplication#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.putApplicationConfig">put_application_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.putApplicationSourceConfig">put_application_source_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.putIframeConfig">put_iframe_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.resetApplicationConfig">reset_application_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.resetApplicationType">reset_application_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.resetIframeConfig">reset_iframe_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.resetInitializationTimeout">reset_initialization_timeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.resetIsService">reset_is_service</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.resetPermissions">reset_permissions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_application_config` <a name="put_application_config" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.putApplicationConfig"></a>

```python
def put_application_config(
  contact_handling: AppintegrationsApplicationApplicationConfigContactHandling = None
) -> None
```

###### `contact_handling`<sup>Optional</sup> <a name="contact_handling" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.putApplicationConfig.parameter.contactHandling"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandling">AppintegrationsApplicationApplicationConfigContactHandling</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appintegrations_application#contact_handling AppintegrationsApplication#contact_handling}.

---

##### `put_application_source_config` <a name="put_application_source_config" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.putApplicationSourceConfig"></a>

```python
def put_application_source_config(
  external_url_config: AppintegrationsApplicationApplicationSourceConfigExternalUrlConfig
) -> None
```

###### `external_url_config`<sup>Required</sup> <a name="external_url_config" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.putApplicationSourceConfig.parameter.externalUrlConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfig">AppintegrationsApplicationApplicationSourceConfigExternalUrlConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appintegrations_application#external_url_config AppintegrationsApplication#external_url_config}.

---

##### `put_iframe_config` <a name="put_iframe_config" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.putIframeConfig"></a>

```python
def put_iframe_config(
  allow: typing.List[str] = None,
  sandbox: typing.List[str] = None
) -> None
```

###### `allow`<sup>Optional</sup> <a name="allow" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.putIframeConfig.parameter.allow"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appintegrations_application#allow AppintegrationsApplication#allow}.

---

###### `sandbox`<sup>Optional</sup> <a name="sandbox" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.putIframeConfig.parameter.sandbox"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appintegrations_application#sandbox AppintegrationsApplication#sandbox}.

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[AppintegrationsApplicationTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTags">AppintegrationsApplicationTags</a>]

---

##### `reset_application_config` <a name="reset_application_config" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.resetApplicationConfig"></a>

```python
def reset_application_config() -> None
```

##### `reset_application_type` <a name="reset_application_type" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.resetApplicationType"></a>

```python
def reset_application_type() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_iframe_config` <a name="reset_iframe_config" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.resetIframeConfig"></a>

```python
def reset_iframe_config() -> None
```

##### `reset_initialization_timeout` <a name="reset_initialization_timeout" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.resetInitializationTimeout"></a>

```python
def reset_initialization_timeout() -> None
```

##### `reset_is_service` <a name="reset_is_service" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.resetIsService"></a>

```python
def reset_is_service() -> None
```

##### `reset_permissions` <a name="reset_permissions" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.resetPermissions"></a>

```python
def reset_permissions() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a AppintegrationsApplication resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.isConstruct"></a>

```python
from cdktn_provider_awscc import appintegrations_application

appintegrationsApplication.AppintegrationsApplication.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.isTerraformElement"></a>

```python
from cdktn_provider_awscc import appintegrations_application

appintegrationsApplication.AppintegrationsApplication.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.isTerraformResource"></a>

```python
from cdktn_provider_awscc import appintegrations_application

appintegrationsApplication.AppintegrationsApplication.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import appintegrations_application

appintegrationsApplication.AppintegrationsApplication.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a AppintegrationsApplication resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the AppintegrationsApplication to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing AppintegrationsApplication that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appintegrations_application#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the AppintegrationsApplication to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.applicationArn">application_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.applicationConfig">application_config</a></code> | <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference">AppintegrationsApplicationApplicationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.applicationId">application_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.applicationSourceConfig">application_source_config</a></code> | <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference">AppintegrationsApplicationApplicationSourceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.iframeConfig">iframe_config</a></code> | <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference">AppintegrationsApplicationIframeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsList">AppintegrationsApplicationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.applicationConfigInput">application_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfig">AppintegrationsApplicationApplicationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.applicationSourceConfigInput">application_source_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfig">AppintegrationsApplicationApplicationSourceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.applicationTypeInput">application_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.iframeConfigInput">iframe_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfig">AppintegrationsApplicationIframeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.initializationTimeoutInput">initialization_timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.isServiceInput">is_service_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.permissionsInput">permissions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTags">AppintegrationsApplicationTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.applicationType">application_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.initializationTimeout">initialization_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.isService">is_service</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.permissions">permissions</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `application_arn`<sup>Required</sup> <a name="application_arn" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.applicationArn"></a>

```python
application_arn: str
```

- *Type:* str

---

##### `application_config`<sup>Required</sup> <a name="application_config" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.applicationConfig"></a>

```python
application_config: AppintegrationsApplicationApplicationConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference">AppintegrationsApplicationApplicationConfigOutputReference</a>

---

##### `application_id`<sup>Required</sup> <a name="application_id" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.applicationId"></a>

```python
application_id: str
```

- *Type:* str

---

##### `application_source_config`<sup>Required</sup> <a name="application_source_config" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.applicationSourceConfig"></a>

```python
application_source_config: AppintegrationsApplicationApplicationSourceConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference">AppintegrationsApplicationApplicationSourceConfigOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `iframe_config`<sup>Required</sup> <a name="iframe_config" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.iframeConfig"></a>

```python
iframe_config: AppintegrationsApplicationIframeConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference">AppintegrationsApplicationIframeConfigOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.tags"></a>

```python
tags: AppintegrationsApplicationTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsList">AppintegrationsApplicationTagsList</a>

---

##### `application_config_input`<sup>Optional</sup> <a name="application_config_input" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.applicationConfigInput"></a>

```python
application_config_input: IResolvable | AppintegrationsApplicationApplicationConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfig">AppintegrationsApplicationApplicationConfig</a>

---

##### `application_source_config_input`<sup>Optional</sup> <a name="application_source_config_input" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.applicationSourceConfigInput"></a>

```python
application_source_config_input: IResolvable | AppintegrationsApplicationApplicationSourceConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfig">AppintegrationsApplicationApplicationSourceConfig</a>

---

##### `application_type_input`<sup>Optional</sup> <a name="application_type_input" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.applicationTypeInput"></a>

```python
application_type_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `iframe_config_input`<sup>Optional</sup> <a name="iframe_config_input" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.iframeConfigInput"></a>

```python
iframe_config_input: IResolvable | AppintegrationsApplicationIframeConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfig">AppintegrationsApplicationIframeConfig</a>

---

##### `initialization_timeout_input`<sup>Optional</sup> <a name="initialization_timeout_input" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.initializationTimeoutInput"></a>

```python
initialization_timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `is_service_input`<sup>Optional</sup> <a name="is_service_input" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.isServiceInput"></a>

```python
is_service_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `permissions_input`<sup>Optional</sup> <a name="permissions_input" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.permissionsInput"></a>

```python
permissions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[AppintegrationsApplicationTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTags">AppintegrationsApplicationTags</a>]

---

##### `application_type`<sup>Required</sup> <a name="application_type" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.applicationType"></a>

```python
application_type: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `initialization_timeout`<sup>Required</sup> <a name="initialization_timeout" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.initializationTimeout"></a>

```python
initialization_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `is_service`<sup>Required</sup> <a name="is_service" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.isService"></a>

```python
is_service: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.permissions"></a>

```python
permissions: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AppintegrationsApplicationApplicationConfig <a name="AppintegrationsApplicationApplicationConfig" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfig.Initializer"></a>

```python
from cdktn_provider_awscc import appintegrations_application

appintegrationsApplication.AppintegrationsApplicationApplicationConfig(
  contact_handling: AppintegrationsApplicationApplicationConfigContactHandling = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfig.property.contactHandling">contact_handling</a></code> | <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandling">AppintegrationsApplicationApplicationConfigContactHandling</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appintegrations_application#contact_handling AppintegrationsApplication#contact_handling}. |

---

##### `contact_handling`<sup>Optional</sup> <a name="contact_handling" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfig.property.contactHandling"></a>

```python
contact_handling: AppintegrationsApplicationApplicationConfigContactHandling
```

- *Type:* <a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandling">AppintegrationsApplicationApplicationConfigContactHandling</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appintegrations_application#contact_handling AppintegrationsApplication#contact_handling}.

---

### AppintegrationsApplicationApplicationConfigContactHandling <a name="AppintegrationsApplicationApplicationConfigContactHandling" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandling"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandling.Initializer"></a>

```python
from cdktn_provider_awscc import appintegrations_application

appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandling(
  scope: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandling.property.scope">scope</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appintegrations_application#scope AppintegrationsApplication#scope}. |

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandling.property.scope"></a>

```python
scope: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appintegrations_application#scope AppintegrationsApplication#scope}.

---

### AppintegrationsApplicationApplicationSourceConfig <a name="AppintegrationsApplicationApplicationSourceConfig" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfig.Initializer"></a>

```python
from cdktn_provider_awscc import appintegrations_application

appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfig(
  external_url_config: AppintegrationsApplicationApplicationSourceConfigExternalUrlConfig
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfig.property.externalUrlConfig">external_url_config</a></code> | <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfig">AppintegrationsApplicationApplicationSourceConfigExternalUrlConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appintegrations_application#external_url_config AppintegrationsApplication#external_url_config}. |

---

##### `external_url_config`<sup>Required</sup> <a name="external_url_config" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfig.property.externalUrlConfig"></a>

```python
external_url_config: AppintegrationsApplicationApplicationSourceConfigExternalUrlConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfig">AppintegrationsApplicationApplicationSourceConfigExternalUrlConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appintegrations_application#external_url_config AppintegrationsApplication#external_url_config}.

---

### AppintegrationsApplicationApplicationSourceConfigExternalUrlConfig <a name="AppintegrationsApplicationApplicationSourceConfigExternalUrlConfig" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfig.Initializer"></a>

```python
from cdktn_provider_awscc import appintegrations_application

appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfig(
  access_url: str,
  approved_origins: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfig.property.accessUrl">access_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appintegrations_application#access_url AppintegrationsApplication#access_url}. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfig.property.approvedOrigins">approved_origins</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appintegrations_application#approved_origins AppintegrationsApplication#approved_origins}. |

---

##### `access_url`<sup>Required</sup> <a name="access_url" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfig.property.accessUrl"></a>

```python
access_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appintegrations_application#access_url AppintegrationsApplication#access_url}.

---

##### `approved_origins`<sup>Optional</sup> <a name="approved_origins" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfig.property.approvedOrigins"></a>

```python
approved_origins: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appintegrations_application#approved_origins AppintegrationsApplication#approved_origins}.

---

### AppintegrationsApplicationConfig <a name="AppintegrationsApplicationConfig" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig.Initializer"></a>

```python
from cdktn_provider_awscc import appintegrations_application

appintegrationsApplication.AppintegrationsApplicationConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  application_source_config: AppintegrationsApplicationApplicationSourceConfig,
  name: str,
  namespace: str,
  application_config: AppintegrationsApplicationApplicationConfig = None,
  application_type: str = None,
  description: str = None,
  iframe_config: AppintegrationsApplicationIframeConfig = None,
  initialization_timeout: typing.Union[int, float] = None,
  is_service: bool | IResolvable = None,
  permissions: typing.List[str] = None,
  tags: IResolvable | typing.List[AppintegrationsApplicationTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig.property.applicationSourceConfig">application_source_config</a></code> | <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfig">AppintegrationsApplicationApplicationSourceConfig</a></code> | Application source config. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig.property.name">name</a></code> | <code>str</code> | The name of the application. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig.property.namespace">namespace</a></code> | <code>str</code> | The namespace of the application. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig.property.applicationConfig">application_config</a></code> | <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfig">AppintegrationsApplicationApplicationConfig</a></code> | The application configuration. Cannot be used when IsService is true. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig.property.applicationType">application_type</a></code> | <code>str</code> | The type of application. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig.property.description">description</a></code> | <code>str</code> | The application description. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig.property.iframeConfig">iframe_config</a></code> | <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfig">AppintegrationsApplicationIframeConfig</a></code> | The iframe configuration. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig.property.initializationTimeout">initialization_timeout</a></code> | <code>typing.Union[int, float]</code> | The initialization timeout in milliseconds. Required when IsService is true. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig.property.isService">is_service</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates if the application is a service. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig.property.permissions">permissions</a></code> | <code>typing.List[str]</code> | The configuration of events or requests that the application has access to. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTags">AppintegrationsApplicationTags</a>]</code> | The tags (keys and values) associated with the application. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `application_source_config`<sup>Required</sup> <a name="application_source_config" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig.property.applicationSourceConfig"></a>

```python
application_source_config: AppintegrationsApplicationApplicationSourceConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfig">AppintegrationsApplicationApplicationSourceConfig</a>

Application source config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appintegrations_application#application_source_config AppintegrationsApplication#application_source_config}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appintegrations_application#name AppintegrationsApplication#name}

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

The namespace of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appintegrations_application#namespace AppintegrationsApplication#namespace}

---

##### `application_config`<sup>Optional</sup> <a name="application_config" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig.property.applicationConfig"></a>

```python
application_config: AppintegrationsApplicationApplicationConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfig">AppintegrationsApplicationApplicationConfig</a>

The application configuration. Cannot be used when IsService is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appintegrations_application#application_config AppintegrationsApplication#application_config}

---

##### `application_type`<sup>Optional</sup> <a name="application_type" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig.property.applicationType"></a>

```python
application_type: str
```

- *Type:* str

The type of application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appintegrations_application#application_type AppintegrationsApplication#application_type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The application description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appintegrations_application#description AppintegrationsApplication#description}

---

##### `iframe_config`<sup>Optional</sup> <a name="iframe_config" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig.property.iframeConfig"></a>

```python
iframe_config: AppintegrationsApplicationIframeConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfig">AppintegrationsApplicationIframeConfig</a>

The iframe configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appintegrations_application#iframe_config AppintegrationsApplication#iframe_config}

---

##### `initialization_timeout`<sup>Optional</sup> <a name="initialization_timeout" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig.property.initializationTimeout"></a>

```python
initialization_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The initialization timeout in milliseconds. Required when IsService is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appintegrations_application#initialization_timeout AppintegrationsApplication#initialization_timeout}

---

##### `is_service`<sup>Optional</sup> <a name="is_service" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig.property.isService"></a>

```python
is_service: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Indicates if the application is a service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appintegrations_application#is_service AppintegrationsApplication#is_service}

---

##### `permissions`<sup>Optional</sup> <a name="permissions" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig.property.permissions"></a>

```python
permissions: typing.List[str]
```

- *Type:* typing.List[str]

The configuration of events or requests that the application has access to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appintegrations_application#permissions AppintegrationsApplication#permissions}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[AppintegrationsApplicationTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTags">AppintegrationsApplicationTags</a>]

The tags (keys and values) associated with the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appintegrations_application#tags AppintegrationsApplication#tags}

---

### AppintegrationsApplicationIframeConfig <a name="AppintegrationsApplicationIframeConfig" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfig.Initializer"></a>

```python
from cdktn_provider_awscc import appintegrations_application

appintegrationsApplication.AppintegrationsApplicationIframeConfig(
  allow: typing.List[str] = None,
  sandbox: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfig.property.allow">allow</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appintegrations_application#allow AppintegrationsApplication#allow}. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfig.property.sandbox">sandbox</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appintegrations_application#sandbox AppintegrationsApplication#sandbox}. |

---

##### `allow`<sup>Optional</sup> <a name="allow" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfig.property.allow"></a>

```python
allow: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appintegrations_application#allow AppintegrationsApplication#allow}.

---

##### `sandbox`<sup>Optional</sup> <a name="sandbox" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfig.property.sandbox"></a>

```python
sandbox: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appintegrations_application#sandbox AppintegrationsApplication#sandbox}.

---

### AppintegrationsApplicationTags <a name="AppintegrationsApplicationTags" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTags.Initializer"></a>

```python
from cdktn_provider_awscc import appintegrations_application

appintegrationsApplication.AppintegrationsApplicationTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTags.property.key">key</a></code> | <code>str</code> | A key to identify the tag. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTags.property.value">value</a></code> | <code>str</code> | Corresponding tag value for the key. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTags.property.key"></a>

```python
key: str
```

- *Type:* str

A key to identify the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appintegrations_application#key AppintegrationsApplication#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTags.property.value"></a>

```python
value: str
```

- *Type:* str

Corresponding tag value for the key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appintegrations_application#value AppintegrationsApplication#value}

---

## Classes <a name="Classes" id="Classes"></a>

### AppintegrationsApplicationApplicationConfigContactHandlingOutputReference <a name="AppintegrationsApplicationApplicationConfigContactHandlingOutputReference" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import appintegrations_application

appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.resetScope">reset_scope</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_scope` <a name="reset_scope" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.resetScope"></a>

```python
def reset_scope() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.property.scopeInput">scope_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.property.scope">scope</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandling">AppintegrationsApplicationApplicationConfigContactHandling</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `scope_input`<sup>Optional</sup> <a name="scope_input" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.property.scopeInput"></a>

```python
scope_input: str
```

- *Type:* str

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.property.scope"></a>

```python
scope: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AppintegrationsApplicationApplicationConfigContactHandling
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandling">AppintegrationsApplicationApplicationConfigContactHandling</a>

---


### AppintegrationsApplicationApplicationConfigOutputReference <a name="AppintegrationsApplicationApplicationConfigOutputReference" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import appintegrations_application

appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.putContactHandling">put_contact_handling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.resetContactHandling">reset_contact_handling</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_contact_handling` <a name="put_contact_handling" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.putContactHandling"></a>

```python
def put_contact_handling(
  scope: str = None
) -> None
```

###### `scope`<sup>Optional</sup> <a name="scope" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.putContactHandling.parameter.scope"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appintegrations_application#scope AppintegrationsApplication#scope}.

---

##### `reset_contact_handling` <a name="reset_contact_handling" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.resetContactHandling"></a>

```python
def reset_contact_handling() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.property.contactHandling">contact_handling</a></code> | <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference">AppintegrationsApplicationApplicationConfigContactHandlingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.property.contactHandlingInput">contact_handling_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandling">AppintegrationsApplicationApplicationConfigContactHandling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfig">AppintegrationsApplicationApplicationConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `contact_handling`<sup>Required</sup> <a name="contact_handling" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.property.contactHandling"></a>

```python
contact_handling: AppintegrationsApplicationApplicationConfigContactHandlingOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference">AppintegrationsApplicationApplicationConfigContactHandlingOutputReference</a>

---

##### `contact_handling_input`<sup>Optional</sup> <a name="contact_handling_input" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.property.contactHandlingInput"></a>

```python
contact_handling_input: IResolvable | AppintegrationsApplicationApplicationConfigContactHandling
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandling">AppintegrationsApplicationApplicationConfigContactHandling</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AppintegrationsApplicationApplicationConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfig">AppintegrationsApplicationApplicationConfig</a>

---


### AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference <a name="AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import appintegrations_application

appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.resetApprovedOrigins">reset_approved_origins</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_approved_origins` <a name="reset_approved_origins" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.resetApprovedOrigins"></a>

```python
def reset_approved_origins() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.property.accessUrlInput">access_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.property.approvedOriginsInput">approved_origins_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.property.accessUrl">access_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.property.approvedOrigins">approved_origins</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfig">AppintegrationsApplicationApplicationSourceConfigExternalUrlConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `access_url_input`<sup>Optional</sup> <a name="access_url_input" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.property.accessUrlInput"></a>

```python
access_url_input: str
```

- *Type:* str

---

##### `approved_origins_input`<sup>Optional</sup> <a name="approved_origins_input" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.property.approvedOriginsInput"></a>

```python
approved_origins_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `access_url`<sup>Required</sup> <a name="access_url" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.property.accessUrl"></a>

```python
access_url: str
```

- *Type:* str

---

##### `approved_origins`<sup>Required</sup> <a name="approved_origins" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.property.approvedOrigins"></a>

```python
approved_origins: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AppintegrationsApplicationApplicationSourceConfigExternalUrlConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfig">AppintegrationsApplicationApplicationSourceConfigExternalUrlConfig</a>

---


### AppintegrationsApplicationApplicationSourceConfigOutputReference <a name="AppintegrationsApplicationApplicationSourceConfigOutputReference" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import appintegrations_application

appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.putExternalUrlConfig">put_external_url_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_external_url_config` <a name="put_external_url_config" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.putExternalUrlConfig"></a>

```python
def put_external_url_config(
  access_url: str,
  approved_origins: typing.List[str] = None
) -> None
```

###### `access_url`<sup>Required</sup> <a name="access_url" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.putExternalUrlConfig.parameter.accessUrl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appintegrations_application#access_url AppintegrationsApplication#access_url}.

---

###### `approved_origins`<sup>Optional</sup> <a name="approved_origins" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.putExternalUrlConfig.parameter.approvedOrigins"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appintegrations_application#approved_origins AppintegrationsApplication#approved_origins}.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.property.externalUrlConfig">external_url_config</a></code> | <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference">AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.property.externalUrlConfigInput">external_url_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfig">AppintegrationsApplicationApplicationSourceConfigExternalUrlConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfig">AppintegrationsApplicationApplicationSourceConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `external_url_config`<sup>Required</sup> <a name="external_url_config" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.property.externalUrlConfig"></a>

```python
external_url_config: AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference">AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference</a>

---

##### `external_url_config_input`<sup>Optional</sup> <a name="external_url_config_input" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.property.externalUrlConfigInput"></a>

```python
external_url_config_input: IResolvable | AppintegrationsApplicationApplicationSourceConfigExternalUrlConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfig">AppintegrationsApplicationApplicationSourceConfigExternalUrlConfig</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AppintegrationsApplicationApplicationSourceConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfig">AppintegrationsApplicationApplicationSourceConfig</a>

---


### AppintegrationsApplicationIframeConfigOutputReference <a name="AppintegrationsApplicationIframeConfigOutputReference" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import appintegrations_application

appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.resetAllow">reset_allow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.resetSandbox">reset_sandbox</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_allow` <a name="reset_allow" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.resetAllow"></a>

```python
def reset_allow() -> None
```

##### `reset_sandbox` <a name="reset_sandbox" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.resetSandbox"></a>

```python
def reset_sandbox() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.property.allowInput">allow_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.property.sandboxInput">sandbox_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.property.allow">allow</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.property.sandbox">sandbox</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfig">AppintegrationsApplicationIframeConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allow_input`<sup>Optional</sup> <a name="allow_input" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.property.allowInput"></a>

```python
allow_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `sandbox_input`<sup>Optional</sup> <a name="sandbox_input" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.property.sandboxInput"></a>

```python
sandbox_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allow`<sup>Required</sup> <a name="allow" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.property.allow"></a>

```python
allow: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `sandbox`<sup>Required</sup> <a name="sandbox" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.property.sandbox"></a>

```python
sandbox: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AppintegrationsApplicationIframeConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfig">AppintegrationsApplicationIframeConfig</a>

---


### AppintegrationsApplicationTagsList <a name="AppintegrationsApplicationTagsList" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import appintegrations_application

appintegrationsApplication.AppintegrationsApplicationTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AppintegrationsApplicationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTags">AppintegrationsApplicationTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[AppintegrationsApplicationTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTags">AppintegrationsApplicationTags</a>]

---


### AppintegrationsApplicationTagsOutputReference <a name="AppintegrationsApplicationTagsOutputReference" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import appintegrations_application

appintegrationsApplication.AppintegrationsApplicationTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTags">AppintegrationsApplicationTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AppintegrationsApplicationTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTags">AppintegrationsApplicationTags</a>

---



