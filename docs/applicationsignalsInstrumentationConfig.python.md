# `applicationsignalsInstrumentationConfig` Submodule <a name="`applicationsignalsInstrumentationConfig` Submodule" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApplicationsignalsInstrumentationConfig <a name="ApplicationsignalsInstrumentationConfig" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config awscc_applicationsignals_instrumentation_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.Initializer"></a>

```python
from cdktn_provider_awscc import applicationsignals_instrumentation_config

applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  capture_configuration: ApplicationsignalsInstrumentationConfigCaptureConfiguration,
  environment: str,
  instrumentation_type: str,
  location: ApplicationsignalsInstrumentationConfigLocation,
  service: str,
  signal_type: str,
  attribute_filters: IResolvable | typing.List[typing.Mapping[str]] = None,
  description: str = None,
  expires_at: str = None,
  tags: IResolvable | typing.List[ApplicationsignalsInstrumentationConfigTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.Initializer.parameter.captureConfiguration">capture_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfiguration">ApplicationsignalsInstrumentationConfigCaptureConfiguration</a></code> | Specifies what to capture when the instrumentation point is hit. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.Initializer.parameter.environment">environment</a></code> | <code>str</code> | The environment that the service is running in. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.Initializer.parameter.instrumentationType">instrumentation_type</a></code> | <code>str</code> | Type of instrumentation: BREAKPOINT (temporary, expires after 24 hours) or PROBE (permanent, persists until deleted). |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.Initializer.parameter.location">location</a></code> | <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocation">ApplicationsignalsInstrumentationConfigLocation</a></code> | The location where instrumentation should be applied. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.Initializer.parameter.service">service</a></code> | <code>str</code> | The name of the service to instrument. This should match the service.name resource attribute reported by the application. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.Initializer.parameter.signalType">signal_type</a></code> | <code>str</code> | The telemetry signal type to emit for this instrumentation. The supported value is SNAPSHOT. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.Initializer.parameter.attributeFilters">attribute_filters</a></code> | <code>cdktn.IResolvable \| typing.List[typing.Mapping[str]]</code> | Client-side filters that target specific instances. Each object is AND-matched on keys, multiple objects are OR-matched. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.Initializer.parameter.description">description</a></code> | <code>str</code> | An optional short description that explains the purpose of this instrumentation. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.Initializer.parameter.expiresAt">expires_at</a></code> | <code>str</code> | The timestamp after which this configuration is no longer served. For BREAKPOINT only; defaults to 24 hours. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTags">ApplicationsignalsInstrumentationConfigTags</a>]</code> | An optional list of key-value pairs to associate with the instrumentation configuration. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `capture_configuration`<sup>Required</sup> <a name="capture_configuration" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.Initializer.parameter.captureConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfiguration">ApplicationsignalsInstrumentationConfigCaptureConfiguration</a>

Specifies what to capture when the instrumentation point is hit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#capture_configuration ApplicationsignalsInstrumentationConfig#capture_configuration}

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.Initializer.parameter.environment"></a>

- *Type:* str

The environment that the service is running in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#environment ApplicationsignalsInstrumentationConfig#environment}

---

##### `instrumentation_type`<sup>Required</sup> <a name="instrumentation_type" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.Initializer.parameter.instrumentationType"></a>

- *Type:* str

Type of instrumentation: BREAKPOINT (temporary, expires after 24 hours) or PROBE (permanent, persists until deleted).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#instrumentation_type ApplicationsignalsInstrumentationConfig#instrumentation_type}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.Initializer.parameter.location"></a>

- *Type:* <a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocation">ApplicationsignalsInstrumentationConfigLocation</a>

The location where instrumentation should be applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#location ApplicationsignalsInstrumentationConfig#location}

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.Initializer.parameter.service"></a>

- *Type:* str

The name of the service to instrument. This should match the service.name resource attribute reported by the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#service ApplicationsignalsInstrumentationConfig#service}

---

##### `signal_type`<sup>Required</sup> <a name="signal_type" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.Initializer.parameter.signalType"></a>

- *Type:* str

The telemetry signal type to emit for this instrumentation. The supported value is SNAPSHOT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#signal_type ApplicationsignalsInstrumentationConfig#signal_type}

---

##### `attribute_filters`<sup>Optional</sup> <a name="attribute_filters" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.Initializer.parameter.attributeFilters"></a>

- *Type:* cdktn.IResolvable | typing.List[typing.Mapping[str]]

Client-side filters that target specific instances. Each object is AND-matched on keys, multiple objects are OR-matched.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#attribute_filters ApplicationsignalsInstrumentationConfig#attribute_filters}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.Initializer.parameter.description"></a>

- *Type:* str

An optional short description that explains the purpose of this instrumentation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#description ApplicationsignalsInstrumentationConfig#description}

---

##### `expires_at`<sup>Optional</sup> <a name="expires_at" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.Initializer.parameter.expiresAt"></a>

- *Type:* str

The timestamp after which this configuration is no longer served. For BREAKPOINT only; defaults to 24 hours.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#expires_at ApplicationsignalsInstrumentationConfig#expires_at}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTags">ApplicationsignalsInstrumentationConfigTags</a>]

An optional list of key-value pairs to associate with the instrumentation configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#tags ApplicationsignalsInstrumentationConfig#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.putCaptureConfiguration">put_capture_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.putLocation">put_location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.resetAttributeFilters">reset_attribute_filters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.resetExpiresAt">reset_expires_at</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_capture_configuration` <a name="put_capture_configuration" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.putCaptureConfiguration"></a>

```python
def put_capture_configuration(
  code_capture: ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture
) -> None
```

###### `code_capture`<sup>Required</sup> <a name="code_capture" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.putCaptureConfiguration.parameter.codeCapture"></a>

- *Type:* <a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture">ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture</a>

Defines what data to capture for code-level instrumentation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#code_capture ApplicationsignalsInstrumentationConfig#code_capture}

---

##### `put_location` <a name="put_location" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.putLocation"></a>

```python
def put_location(
  code_location: ApplicationsignalsInstrumentationConfigLocationCodeLocation
) -> None
```

###### `code_location`<sup>Required</sup> <a name="code_location" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.putLocation.parameter.codeLocation"></a>

- *Type:* <a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocation">ApplicationsignalsInstrumentationConfigLocationCodeLocation</a>

Identifies a code location to instrument.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#code_location ApplicationsignalsInstrumentationConfig#code_location}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[ApplicationsignalsInstrumentationConfigTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTags">ApplicationsignalsInstrumentationConfigTags</a>]

---

##### `reset_attribute_filters` <a name="reset_attribute_filters" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.resetAttributeFilters"></a>

```python
def reset_attribute_filters() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_expires_at` <a name="reset_expires_at" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.resetExpiresAt"></a>

```python
def reset_expires_at() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a ApplicationsignalsInstrumentationConfig resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.isConstruct"></a>

```python
from cdktn_provider_awscc import applicationsignals_instrumentation_config

applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.isTerraformElement"></a>

```python
from cdktn_provider_awscc import applicationsignals_instrumentation_config

applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.isTerraformResource"></a>

```python
from cdktn_provider_awscc import applicationsignals_instrumentation_config

applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import applicationsignals_instrumentation_config

applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a ApplicationsignalsInstrumentationConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ApplicationsignalsInstrumentationConfig to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ApplicationsignalsInstrumentationConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ApplicationsignalsInstrumentationConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.captureConfiguration">capture_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference">ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.location">location</a></code> | <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference">ApplicationsignalsInstrumentationConfigLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.locationHash">location_hash</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsList">ApplicationsignalsInstrumentationConfigTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.attributeFiltersInput">attribute_filters_input</a></code> | <code>cdktn.IResolvable \| typing.List[typing.Mapping[str]]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.captureConfigurationInput">capture_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfiguration">ApplicationsignalsInstrumentationConfigCaptureConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.environmentInput">environment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.expiresAtInput">expires_at_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.instrumentationTypeInput">instrumentation_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.locationInput">location_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocation">ApplicationsignalsInstrumentationConfigLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.serviceInput">service_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.signalTypeInput">signal_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTags">ApplicationsignalsInstrumentationConfigTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.attributeFilters">attribute_filters</a></code> | <code>cdktn.IResolvable \| typing.List[typing.Mapping[str]]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.environment">environment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.expiresAt">expires_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.instrumentationType">instrumentation_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.service">service</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.signalType">signal_type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `capture_configuration`<sup>Required</sup> <a name="capture_configuration" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.captureConfiguration"></a>

```python
capture_configuration: ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference">ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference</a>

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.location"></a>

```python
location: ApplicationsignalsInstrumentationConfigLocationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference">ApplicationsignalsInstrumentationConfigLocationOutputReference</a>

---

##### `location_hash`<sup>Required</sup> <a name="location_hash" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.locationHash"></a>

```python
location_hash: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.tags"></a>

```python
tags: ApplicationsignalsInstrumentationConfigTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsList">ApplicationsignalsInstrumentationConfigTagsList</a>

---

##### `attribute_filters_input`<sup>Optional</sup> <a name="attribute_filters_input" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.attributeFiltersInput"></a>

```python
attribute_filters_input: IResolvable | typing.List[typing.Mapping[str]]
```

- *Type:* cdktn.IResolvable | typing.List[typing.Mapping[str]]

---

##### `capture_configuration_input`<sup>Optional</sup> <a name="capture_configuration_input" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.captureConfigurationInput"></a>

```python
capture_configuration_input: IResolvable | ApplicationsignalsInstrumentationConfigCaptureConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfiguration">ApplicationsignalsInstrumentationConfigCaptureConfiguration</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `environment_input`<sup>Optional</sup> <a name="environment_input" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.environmentInput"></a>

```python
environment_input: str
```

- *Type:* str

---

##### `expires_at_input`<sup>Optional</sup> <a name="expires_at_input" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.expiresAtInput"></a>

```python
expires_at_input: str
```

- *Type:* str

---

##### `instrumentation_type_input`<sup>Optional</sup> <a name="instrumentation_type_input" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.instrumentationTypeInput"></a>

```python
instrumentation_type_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.locationInput"></a>

```python
location_input: IResolvable | ApplicationsignalsInstrumentationConfigLocation
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocation">ApplicationsignalsInstrumentationConfigLocation</a>

---

##### `service_input`<sup>Optional</sup> <a name="service_input" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.serviceInput"></a>

```python
service_input: str
```

- *Type:* str

---

##### `signal_type_input`<sup>Optional</sup> <a name="signal_type_input" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.signalTypeInput"></a>

```python
signal_type_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[ApplicationsignalsInstrumentationConfigTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTags">ApplicationsignalsInstrumentationConfigTags</a>]

---

##### `attribute_filters`<sup>Required</sup> <a name="attribute_filters" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.attributeFilters"></a>

```python
attribute_filters: IResolvable | typing.List[typing.Mapping[str]]
```

- *Type:* cdktn.IResolvable | typing.List[typing.Mapping[str]]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.environment"></a>

```python
environment: str
```

- *Type:* str

---

##### `expires_at`<sup>Required</sup> <a name="expires_at" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.expiresAt"></a>

```python
expires_at: str
```

- *Type:* str

---

##### `instrumentation_type`<sup>Required</sup> <a name="instrumentation_type" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.instrumentationType"></a>

```python
instrumentation_type: str
```

- *Type:* str

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.service"></a>

```python
service: str
```

- *Type:* str

---

##### `signal_type`<sup>Required</sup> <a name="signal_type" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.signalType"></a>

```python
signal_type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ApplicationsignalsInstrumentationConfigCaptureConfiguration <a name="ApplicationsignalsInstrumentationConfigCaptureConfiguration" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import applicationsignals_instrumentation_config

applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfiguration(
  code_capture: ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfiguration.property.codeCapture">code_capture</a></code> | <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture">ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture</a></code> | Defines what data to capture for code-level instrumentation. |

---

##### `code_capture`<sup>Required</sup> <a name="code_capture" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfiguration.property.codeCapture"></a>

```python
code_capture: ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture
```

- *Type:* <a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture">ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture</a>

Defines what data to capture for code-level instrumentation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#code_capture ApplicationsignalsInstrumentationConfig#code_capture}

---

### ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture <a name="ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture.Initializer"></a>

```python
from cdktn_provider_awscc import applicationsignals_instrumentation_config

applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture(
  capture_limits: ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits,
  capture_arguments: typing.List[str] = None,
  capture_locals: typing.List[str] = None,
  capture_return: bool | IResolvable = None,
  capture_stack_trace: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture.property.captureLimits">capture_limits</a></code> | <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits">ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits</a></code> | Safety limits that bound what is captured. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture.property.captureArguments">capture_arguments</a></code> | <code>typing.List[str]</code> | The function arguments to capture. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture.property.captureLocals">capture_locals</a></code> | <code>typing.List[str]</code> | The local variables to capture by name. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture.property.captureReturn">capture_return</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether to capture the return value. Defaults to false. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture.property.captureStackTrace">capture_stack_trace</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether to capture a stack trace. Defaults to true. |

---

##### `capture_limits`<sup>Required</sup> <a name="capture_limits" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture.property.captureLimits"></a>

```python
capture_limits: ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits
```

- *Type:* <a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits">ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits</a>

Safety limits that bound what is captured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#capture_limits ApplicationsignalsInstrumentationConfig#capture_limits}

---

##### `capture_arguments`<sup>Optional</sup> <a name="capture_arguments" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture.property.captureArguments"></a>

```python
capture_arguments: typing.List[str]
```

- *Type:* typing.List[str]

The function arguments to capture.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#capture_arguments ApplicationsignalsInstrumentationConfig#capture_arguments}

---

##### `capture_locals`<sup>Optional</sup> <a name="capture_locals" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture.property.captureLocals"></a>

```python
capture_locals: typing.List[str]
```

- *Type:* typing.List[str]

The local variables to capture by name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#capture_locals ApplicationsignalsInstrumentationConfig#capture_locals}

---

##### `capture_return`<sup>Optional</sup> <a name="capture_return" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture.property.captureReturn"></a>

```python
capture_return: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether to capture the return value. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#capture_return ApplicationsignalsInstrumentationConfig#capture_return}

---

##### `capture_stack_trace`<sup>Optional</sup> <a name="capture_stack_trace" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture.property.captureStackTrace"></a>

```python
capture_stack_trace: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether to capture a stack trace. Defaults to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#capture_stack_trace ApplicationsignalsInstrumentationConfig#capture_stack_trace}

---

### ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits <a name="ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits.Initializer"></a>

```python
from cdktn_provider_awscc import applicationsignals_instrumentation_config

applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits(
  max_collection_depth: typing.Union[int, float] = None,
  max_collection_width: typing.Union[int, float] = None,
  max_fields_per_object: typing.Union[int, float] = None,
  max_hits: typing.Union[int, float] = None,
  max_object_depth: typing.Union[int, float] = None,
  max_stack_frames: typing.Union[int, float] = None,
  max_stack_trace_size: typing.Union[int, float] = None,
  max_string_length: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits.property.maxCollectionDepth">max_collection_depth</a></code> | <code>typing.Union[int, float]</code> | Maximum nesting depth to traverse inside collections. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits.property.maxCollectionWidth">max_collection_width</a></code> | <code>typing.Union[int, float]</code> | Maximum number of items to capture from any collection. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits.property.maxFieldsPerObject">max_fields_per_object</a></code> | <code>typing.Union[int, float]</code> | Maximum number of fields to capture for any object. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits.property.maxHits">max_hits</a></code> | <code>typing.Union[int, float]</code> | Maximum number of times the instrumentation point can be hit before disabled. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits.property.maxObjectDepth">max_object_depth</a></code> | <code>typing.Union[int, float]</code> | Maximum depth for nested object traversal. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits.property.maxStackFrames">max_stack_frames</a></code> | <code>typing.Union[int, float]</code> | Maximum number of stack frames to capture. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits.property.maxStackTraceSize">max_stack_trace_size</a></code> | <code>typing.Union[int, float]</code> | Maximum total size in bytes of a captured stack trace. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits.property.maxStringLength">max_string_length</a></code> | <code>typing.Union[int, float]</code> | Maximum length of captured string values in characters. |

---

##### `max_collection_depth`<sup>Optional</sup> <a name="max_collection_depth" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits.property.maxCollectionDepth"></a>

```python
max_collection_depth: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum nesting depth to traverse inside collections.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#max_collection_depth ApplicationsignalsInstrumentationConfig#max_collection_depth}

---

##### `max_collection_width`<sup>Optional</sup> <a name="max_collection_width" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits.property.maxCollectionWidth"></a>

```python
max_collection_width: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum number of items to capture from any collection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#max_collection_width ApplicationsignalsInstrumentationConfig#max_collection_width}

---

##### `max_fields_per_object`<sup>Optional</sup> <a name="max_fields_per_object" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits.property.maxFieldsPerObject"></a>

```python
max_fields_per_object: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum number of fields to capture for any object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#max_fields_per_object ApplicationsignalsInstrumentationConfig#max_fields_per_object}

---

##### `max_hits`<sup>Optional</sup> <a name="max_hits" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits.property.maxHits"></a>

```python
max_hits: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum number of times the instrumentation point can be hit before disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#max_hits ApplicationsignalsInstrumentationConfig#max_hits}

---

##### `max_object_depth`<sup>Optional</sup> <a name="max_object_depth" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits.property.maxObjectDepth"></a>

```python
max_object_depth: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum depth for nested object traversal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#max_object_depth ApplicationsignalsInstrumentationConfig#max_object_depth}

---

##### `max_stack_frames`<sup>Optional</sup> <a name="max_stack_frames" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits.property.maxStackFrames"></a>

```python
max_stack_frames: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum number of stack frames to capture.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#max_stack_frames ApplicationsignalsInstrumentationConfig#max_stack_frames}

---

##### `max_stack_trace_size`<sup>Optional</sup> <a name="max_stack_trace_size" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits.property.maxStackTraceSize"></a>

```python
max_stack_trace_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum total size in bytes of a captured stack trace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#max_stack_trace_size ApplicationsignalsInstrumentationConfig#max_stack_trace_size}

---

##### `max_string_length`<sup>Optional</sup> <a name="max_string_length" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits.property.maxStringLength"></a>

```python
max_string_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum length of captured string values in characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#max_string_length ApplicationsignalsInstrumentationConfig#max_string_length}

---

### ApplicationsignalsInstrumentationConfigConfig <a name="ApplicationsignalsInstrumentationConfigConfig" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigConfig.Initializer"></a>

```python
from cdktn_provider_awscc import applicationsignals_instrumentation_config

applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  capture_configuration: ApplicationsignalsInstrumentationConfigCaptureConfiguration,
  environment: str,
  instrumentation_type: str,
  location: ApplicationsignalsInstrumentationConfigLocation,
  service: str,
  signal_type: str,
  attribute_filters: IResolvable | typing.List[typing.Mapping[str]] = None,
  description: str = None,
  expires_at: str = None,
  tags: IResolvable | typing.List[ApplicationsignalsInstrumentationConfigTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigConfig.property.captureConfiguration">capture_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfiguration">ApplicationsignalsInstrumentationConfigCaptureConfiguration</a></code> | Specifies what to capture when the instrumentation point is hit. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigConfig.property.environment">environment</a></code> | <code>str</code> | The environment that the service is running in. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigConfig.property.instrumentationType">instrumentation_type</a></code> | <code>str</code> | Type of instrumentation: BREAKPOINT (temporary, expires after 24 hours) or PROBE (permanent, persists until deleted). |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigConfig.property.location">location</a></code> | <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocation">ApplicationsignalsInstrumentationConfigLocation</a></code> | The location where instrumentation should be applied. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigConfig.property.service">service</a></code> | <code>str</code> | The name of the service to instrument. This should match the service.name resource attribute reported by the application. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigConfig.property.signalType">signal_type</a></code> | <code>str</code> | The telemetry signal type to emit for this instrumentation. The supported value is SNAPSHOT. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigConfig.property.attributeFilters">attribute_filters</a></code> | <code>cdktn.IResolvable \| typing.List[typing.Mapping[str]]</code> | Client-side filters that target specific instances. Each object is AND-matched on keys, multiple objects are OR-matched. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigConfig.property.description">description</a></code> | <code>str</code> | An optional short description that explains the purpose of this instrumentation. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigConfig.property.expiresAt">expires_at</a></code> | <code>str</code> | The timestamp after which this configuration is no longer served. For BREAKPOINT only; defaults to 24 hours. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTags">ApplicationsignalsInstrumentationConfigTags</a>]</code> | An optional list of key-value pairs to associate with the instrumentation configuration. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `capture_configuration`<sup>Required</sup> <a name="capture_configuration" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigConfig.property.captureConfiguration"></a>

```python
capture_configuration: ApplicationsignalsInstrumentationConfigCaptureConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfiguration">ApplicationsignalsInstrumentationConfigCaptureConfiguration</a>

Specifies what to capture when the instrumentation point is hit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#capture_configuration ApplicationsignalsInstrumentationConfig#capture_configuration}

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigConfig.property.environment"></a>

```python
environment: str
```

- *Type:* str

The environment that the service is running in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#environment ApplicationsignalsInstrumentationConfig#environment}

---

##### `instrumentation_type`<sup>Required</sup> <a name="instrumentation_type" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigConfig.property.instrumentationType"></a>

```python
instrumentation_type: str
```

- *Type:* str

Type of instrumentation: BREAKPOINT (temporary, expires after 24 hours) or PROBE (permanent, persists until deleted).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#instrumentation_type ApplicationsignalsInstrumentationConfig#instrumentation_type}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigConfig.property.location"></a>

```python
location: ApplicationsignalsInstrumentationConfigLocation
```

- *Type:* <a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocation">ApplicationsignalsInstrumentationConfigLocation</a>

The location where instrumentation should be applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#location ApplicationsignalsInstrumentationConfig#location}

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigConfig.property.service"></a>

```python
service: str
```

- *Type:* str

The name of the service to instrument. This should match the service.name resource attribute reported by the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#service ApplicationsignalsInstrumentationConfig#service}

---

##### `signal_type`<sup>Required</sup> <a name="signal_type" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigConfig.property.signalType"></a>

```python
signal_type: str
```

- *Type:* str

The telemetry signal type to emit for this instrumentation. The supported value is SNAPSHOT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#signal_type ApplicationsignalsInstrumentationConfig#signal_type}

---

##### `attribute_filters`<sup>Optional</sup> <a name="attribute_filters" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigConfig.property.attributeFilters"></a>

```python
attribute_filters: IResolvable | typing.List[typing.Mapping[str]]
```

- *Type:* cdktn.IResolvable | typing.List[typing.Mapping[str]]

Client-side filters that target specific instances. Each object is AND-matched on keys, multiple objects are OR-matched.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#attribute_filters ApplicationsignalsInstrumentationConfig#attribute_filters}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigConfig.property.description"></a>

```python
description: str
```

- *Type:* str

An optional short description that explains the purpose of this instrumentation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#description ApplicationsignalsInstrumentationConfig#description}

---

##### `expires_at`<sup>Optional</sup> <a name="expires_at" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigConfig.property.expiresAt"></a>

```python
expires_at: str
```

- *Type:* str

The timestamp after which this configuration is no longer served. For BREAKPOINT only; defaults to 24 hours.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#expires_at ApplicationsignalsInstrumentationConfig#expires_at}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[ApplicationsignalsInstrumentationConfigTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTags">ApplicationsignalsInstrumentationConfigTags</a>]

An optional list of key-value pairs to associate with the instrumentation configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#tags ApplicationsignalsInstrumentationConfig#tags}

---

### ApplicationsignalsInstrumentationConfigLocation <a name="ApplicationsignalsInstrumentationConfigLocation" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocation.Initializer"></a>

```python
from cdktn_provider_awscc import applicationsignals_instrumentation_config

applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocation(
  code_location: ApplicationsignalsInstrumentationConfigLocationCodeLocation
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocation.property.codeLocation">code_location</a></code> | <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocation">ApplicationsignalsInstrumentationConfigLocationCodeLocation</a></code> | Identifies a code location to instrument. |

---

##### `code_location`<sup>Required</sup> <a name="code_location" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocation.property.codeLocation"></a>

```python
code_location: ApplicationsignalsInstrumentationConfigLocationCodeLocation
```

- *Type:* <a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocation">ApplicationsignalsInstrumentationConfigLocationCodeLocation</a>

Identifies a code location to instrument.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#code_location ApplicationsignalsInstrumentationConfig#code_location}

---

### ApplicationsignalsInstrumentationConfigLocationCodeLocation <a name="ApplicationsignalsInstrumentationConfigLocationCodeLocation" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocation.Initializer"></a>

```python
from cdktn_provider_awscc import applicationsignals_instrumentation_config

applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocation(
  file_path: str,
  language: str,
  class_name: str = None,
  code_unit: str = None,
  line_number: typing.Union[int, float] = None,
  method_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocation.property.filePath">file_path</a></code> | <code>str</code> | The source file path relative to the project or source root. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocation.property.language">language</a></code> | <code>str</code> | The programming language for this instrumentation point. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocation.property.className">class_name</a></code> | <code>str</code> | The class or type name that contains the method. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocation.property.codeUnit">code_unit</a></code> | <code>str</code> | The package, module, or namespace that contains the target code. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocation.property.lineNumber">line_number</a></code> | <code>typing.Union[int, float]</code> | The line number to instrument. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocation.property.methodName">method_name</a></code> | <code>str</code> | The method or function name to instrument. |

---

##### `file_path`<sup>Required</sup> <a name="file_path" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocation.property.filePath"></a>

```python
file_path: str
```

- *Type:* str

The source file path relative to the project or source root.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#file_path ApplicationsignalsInstrumentationConfig#file_path}

---

##### `language`<sup>Required</sup> <a name="language" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocation.property.language"></a>

```python
language: str
```

- *Type:* str

The programming language for this instrumentation point.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#language ApplicationsignalsInstrumentationConfig#language}

---

##### `class_name`<sup>Optional</sup> <a name="class_name" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocation.property.className"></a>

```python
class_name: str
```

- *Type:* str

The class or type name that contains the method.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#class_name ApplicationsignalsInstrumentationConfig#class_name}

---

##### `code_unit`<sup>Optional</sup> <a name="code_unit" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocation.property.codeUnit"></a>

```python
code_unit: str
```

- *Type:* str

The package, module, or namespace that contains the target code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#code_unit ApplicationsignalsInstrumentationConfig#code_unit}

---

##### `line_number`<sup>Optional</sup> <a name="line_number" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocation.property.lineNumber"></a>

```python
line_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The line number to instrument.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#line_number ApplicationsignalsInstrumentationConfig#line_number}

---

##### `method_name`<sup>Optional</sup> <a name="method_name" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocation.property.methodName"></a>

```python
method_name: str
```

- *Type:* str

The method or function name to instrument.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#method_name ApplicationsignalsInstrumentationConfig#method_name}

---

### ApplicationsignalsInstrumentationConfigTags <a name="ApplicationsignalsInstrumentationConfigTags" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTags.Initializer"></a>

```python
from cdktn_provider_awscc import applicationsignals_instrumentation_config

applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTags.property.key">key</a></code> | <code>str</code> | The tag key. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTags.property.value">value</a></code> | <code>str</code> | The tag value. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTags.property.key"></a>

```python
key: str
```

- *Type:* str

The tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#key ApplicationsignalsInstrumentationConfig#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTags.property.value"></a>

```python
value: str
```

- *Type:* str

The tag value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#value ApplicationsignalsInstrumentationConfig#value}

---

## Classes <a name="Classes" id="Classes"></a>

### ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference <a name="ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import applicationsignals_instrumentation_config

applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.resetMaxCollectionDepth">reset_max_collection_depth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.resetMaxCollectionWidth">reset_max_collection_width</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.resetMaxFieldsPerObject">reset_max_fields_per_object</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.resetMaxHits">reset_max_hits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.resetMaxObjectDepth">reset_max_object_depth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.resetMaxStackFrames">reset_max_stack_frames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.resetMaxStackTraceSize">reset_max_stack_trace_size</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.resetMaxStringLength">reset_max_string_length</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_max_collection_depth` <a name="reset_max_collection_depth" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.resetMaxCollectionDepth"></a>

```python
def reset_max_collection_depth() -> None
```

##### `reset_max_collection_width` <a name="reset_max_collection_width" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.resetMaxCollectionWidth"></a>

```python
def reset_max_collection_width() -> None
```

##### `reset_max_fields_per_object` <a name="reset_max_fields_per_object" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.resetMaxFieldsPerObject"></a>

```python
def reset_max_fields_per_object() -> None
```

##### `reset_max_hits` <a name="reset_max_hits" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.resetMaxHits"></a>

```python
def reset_max_hits() -> None
```

##### `reset_max_object_depth` <a name="reset_max_object_depth" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.resetMaxObjectDepth"></a>

```python
def reset_max_object_depth() -> None
```

##### `reset_max_stack_frames` <a name="reset_max_stack_frames" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.resetMaxStackFrames"></a>

```python
def reset_max_stack_frames() -> None
```

##### `reset_max_stack_trace_size` <a name="reset_max_stack_trace_size" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.resetMaxStackTraceSize"></a>

```python
def reset_max_stack_trace_size() -> None
```

##### `reset_max_string_length` <a name="reset_max_string_length" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.resetMaxStringLength"></a>

```python
def reset_max_string_length() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxCollectionDepthInput">max_collection_depth_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxCollectionWidthInput">max_collection_width_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxFieldsPerObjectInput">max_fields_per_object_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxHitsInput">max_hits_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxObjectDepthInput">max_object_depth_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxStackFramesInput">max_stack_frames_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxStackTraceSizeInput">max_stack_trace_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxStringLengthInput">max_string_length_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxCollectionDepth">max_collection_depth</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxCollectionWidth">max_collection_width</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxFieldsPerObject">max_fields_per_object</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxHits">max_hits</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxObjectDepth">max_object_depth</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxStackFrames">max_stack_frames</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxStackTraceSize">max_stack_trace_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxStringLength">max_string_length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits">ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_collection_depth_input`<sup>Optional</sup> <a name="max_collection_depth_input" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxCollectionDepthInput"></a>

```python
max_collection_depth_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_collection_width_input`<sup>Optional</sup> <a name="max_collection_width_input" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxCollectionWidthInput"></a>

```python
max_collection_width_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_fields_per_object_input`<sup>Optional</sup> <a name="max_fields_per_object_input" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxFieldsPerObjectInput"></a>

```python
max_fields_per_object_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_hits_input`<sup>Optional</sup> <a name="max_hits_input" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxHitsInput"></a>

```python
max_hits_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_object_depth_input`<sup>Optional</sup> <a name="max_object_depth_input" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxObjectDepthInput"></a>

```python
max_object_depth_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_stack_frames_input`<sup>Optional</sup> <a name="max_stack_frames_input" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxStackFramesInput"></a>

```python
max_stack_frames_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_stack_trace_size_input`<sup>Optional</sup> <a name="max_stack_trace_size_input" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxStackTraceSizeInput"></a>

```python
max_stack_trace_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_string_length_input`<sup>Optional</sup> <a name="max_string_length_input" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxStringLengthInput"></a>

```python
max_string_length_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_collection_depth`<sup>Required</sup> <a name="max_collection_depth" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxCollectionDepth"></a>

```python
max_collection_depth: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_collection_width`<sup>Required</sup> <a name="max_collection_width" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxCollectionWidth"></a>

```python
max_collection_width: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_fields_per_object`<sup>Required</sup> <a name="max_fields_per_object" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxFieldsPerObject"></a>

```python
max_fields_per_object: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_hits`<sup>Required</sup> <a name="max_hits" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxHits"></a>

```python
max_hits: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_object_depth`<sup>Required</sup> <a name="max_object_depth" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxObjectDepth"></a>

```python
max_object_depth: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_stack_frames`<sup>Required</sup> <a name="max_stack_frames" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxStackFrames"></a>

```python
max_stack_frames: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_stack_trace_size`<sup>Required</sup> <a name="max_stack_trace_size" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxStackTraceSize"></a>

```python
max_stack_trace_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_string_length`<sup>Required</sup> <a name="max_string_length" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxStringLength"></a>

```python
max_string_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits">ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits</a>

---


### ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference <a name="ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import applicationsignals_instrumentation_config

applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.putCaptureLimits">put_capture_limits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.resetCaptureArguments">reset_capture_arguments</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.resetCaptureLocals">reset_capture_locals</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.resetCaptureReturn">reset_capture_return</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.resetCaptureStackTrace">reset_capture_stack_trace</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_capture_limits` <a name="put_capture_limits" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.putCaptureLimits"></a>

```python
def put_capture_limits(
  max_collection_depth: typing.Union[int, float] = None,
  max_collection_width: typing.Union[int, float] = None,
  max_fields_per_object: typing.Union[int, float] = None,
  max_hits: typing.Union[int, float] = None,
  max_object_depth: typing.Union[int, float] = None,
  max_stack_frames: typing.Union[int, float] = None,
  max_stack_trace_size: typing.Union[int, float] = None,
  max_string_length: typing.Union[int, float] = None
) -> None
```

###### `max_collection_depth`<sup>Optional</sup> <a name="max_collection_depth" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.putCaptureLimits.parameter.maxCollectionDepth"></a>

- *Type:* typing.Union[int, float]

Maximum nesting depth to traverse inside collections.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#max_collection_depth ApplicationsignalsInstrumentationConfig#max_collection_depth}

---

###### `max_collection_width`<sup>Optional</sup> <a name="max_collection_width" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.putCaptureLimits.parameter.maxCollectionWidth"></a>

- *Type:* typing.Union[int, float]

Maximum number of items to capture from any collection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#max_collection_width ApplicationsignalsInstrumentationConfig#max_collection_width}

---

###### `max_fields_per_object`<sup>Optional</sup> <a name="max_fields_per_object" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.putCaptureLimits.parameter.maxFieldsPerObject"></a>

- *Type:* typing.Union[int, float]

Maximum number of fields to capture for any object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#max_fields_per_object ApplicationsignalsInstrumentationConfig#max_fields_per_object}

---

###### `max_hits`<sup>Optional</sup> <a name="max_hits" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.putCaptureLimits.parameter.maxHits"></a>

- *Type:* typing.Union[int, float]

Maximum number of times the instrumentation point can be hit before disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#max_hits ApplicationsignalsInstrumentationConfig#max_hits}

---

###### `max_object_depth`<sup>Optional</sup> <a name="max_object_depth" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.putCaptureLimits.parameter.maxObjectDepth"></a>

- *Type:* typing.Union[int, float]

Maximum depth for nested object traversal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#max_object_depth ApplicationsignalsInstrumentationConfig#max_object_depth}

---

###### `max_stack_frames`<sup>Optional</sup> <a name="max_stack_frames" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.putCaptureLimits.parameter.maxStackFrames"></a>

- *Type:* typing.Union[int, float]

Maximum number of stack frames to capture.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#max_stack_frames ApplicationsignalsInstrumentationConfig#max_stack_frames}

---

###### `max_stack_trace_size`<sup>Optional</sup> <a name="max_stack_trace_size" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.putCaptureLimits.parameter.maxStackTraceSize"></a>

- *Type:* typing.Union[int, float]

Maximum total size in bytes of a captured stack trace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#max_stack_trace_size ApplicationsignalsInstrumentationConfig#max_stack_trace_size}

---

###### `max_string_length`<sup>Optional</sup> <a name="max_string_length" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.putCaptureLimits.parameter.maxStringLength"></a>

- *Type:* typing.Union[int, float]

Maximum length of captured string values in characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#max_string_length ApplicationsignalsInstrumentationConfig#max_string_length}

---

##### `reset_capture_arguments` <a name="reset_capture_arguments" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.resetCaptureArguments"></a>

```python
def reset_capture_arguments() -> None
```

##### `reset_capture_locals` <a name="reset_capture_locals" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.resetCaptureLocals"></a>

```python
def reset_capture_locals() -> None
```

##### `reset_capture_return` <a name="reset_capture_return" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.resetCaptureReturn"></a>

```python
def reset_capture_return() -> None
```

##### `reset_capture_stack_trace` <a name="reset_capture_stack_trace" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.resetCaptureStackTrace"></a>

```python
def reset_capture_stack_trace() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.captureLimits">capture_limits</a></code> | <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference">ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.captureArgumentsInput">capture_arguments_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.captureLimitsInput">capture_limits_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits">ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.captureLocalsInput">capture_locals_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.captureReturnInput">capture_return_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.captureStackTraceInput">capture_stack_trace_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.captureArguments">capture_arguments</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.captureLocals">capture_locals</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.captureReturn">capture_return</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.captureStackTrace">capture_stack_trace</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture">ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `capture_limits`<sup>Required</sup> <a name="capture_limits" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.captureLimits"></a>

```python
capture_limits: ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference">ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference</a>

---

##### `capture_arguments_input`<sup>Optional</sup> <a name="capture_arguments_input" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.captureArgumentsInput"></a>

```python
capture_arguments_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `capture_limits_input`<sup>Optional</sup> <a name="capture_limits_input" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.captureLimitsInput"></a>

```python
capture_limits_input: IResolvable | ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits">ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits</a>

---

##### `capture_locals_input`<sup>Optional</sup> <a name="capture_locals_input" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.captureLocalsInput"></a>

```python
capture_locals_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `capture_return_input`<sup>Optional</sup> <a name="capture_return_input" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.captureReturnInput"></a>

```python
capture_return_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `capture_stack_trace_input`<sup>Optional</sup> <a name="capture_stack_trace_input" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.captureStackTraceInput"></a>

```python
capture_stack_trace_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `capture_arguments`<sup>Required</sup> <a name="capture_arguments" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.captureArguments"></a>

```python
capture_arguments: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `capture_locals`<sup>Required</sup> <a name="capture_locals" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.captureLocals"></a>

```python
capture_locals: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `capture_return`<sup>Required</sup> <a name="capture_return" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.captureReturn"></a>

```python
capture_return: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `capture_stack_trace`<sup>Required</sup> <a name="capture_stack_trace" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.captureStackTrace"></a>

```python
capture_stack_trace: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture">ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture</a>

---


### ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference <a name="ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import applicationsignals_instrumentation_config

applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.putCodeCapture">put_code_capture</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_code_capture` <a name="put_code_capture" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.putCodeCapture"></a>

```python
def put_code_capture(
  capture_limits: ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits,
  capture_arguments: typing.List[str] = None,
  capture_locals: typing.List[str] = None,
  capture_return: bool | IResolvable = None,
  capture_stack_trace: bool | IResolvable = None
) -> None
```

###### `capture_limits`<sup>Required</sup> <a name="capture_limits" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.putCodeCapture.parameter.captureLimits"></a>

- *Type:* <a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits">ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits</a>

Safety limits that bound what is captured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#capture_limits ApplicationsignalsInstrumentationConfig#capture_limits}

---

###### `capture_arguments`<sup>Optional</sup> <a name="capture_arguments" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.putCodeCapture.parameter.captureArguments"></a>

- *Type:* typing.List[str]

The function arguments to capture.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#capture_arguments ApplicationsignalsInstrumentationConfig#capture_arguments}

---

###### `capture_locals`<sup>Optional</sup> <a name="capture_locals" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.putCodeCapture.parameter.captureLocals"></a>

- *Type:* typing.List[str]

The local variables to capture by name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#capture_locals ApplicationsignalsInstrumentationConfig#capture_locals}

---

###### `capture_return`<sup>Optional</sup> <a name="capture_return" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.putCodeCapture.parameter.captureReturn"></a>

- *Type:* bool | cdktn.IResolvable

Whether to capture the return value. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#capture_return ApplicationsignalsInstrumentationConfig#capture_return}

---

###### `capture_stack_trace`<sup>Optional</sup> <a name="capture_stack_trace" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.putCodeCapture.parameter.captureStackTrace"></a>

- *Type:* bool | cdktn.IResolvable

Whether to capture a stack trace. Defaults to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#capture_stack_trace ApplicationsignalsInstrumentationConfig#capture_stack_trace}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.property.codeCapture">code_capture</a></code> | <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference">ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.property.codeCaptureInput">code_capture_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture">ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfiguration">ApplicationsignalsInstrumentationConfigCaptureConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `code_capture`<sup>Required</sup> <a name="code_capture" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.property.codeCapture"></a>

```python
code_capture: ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference">ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference</a>

---

##### `code_capture_input`<sup>Optional</sup> <a name="code_capture_input" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.property.codeCaptureInput"></a>

```python
code_capture_input: IResolvable | ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture">ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ApplicationsignalsInstrumentationConfigCaptureConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfiguration">ApplicationsignalsInstrumentationConfigCaptureConfiguration</a>

---


### ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference <a name="ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import applicationsignals_instrumentation_config

applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.resetClassName">reset_class_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.resetCodeUnit">reset_code_unit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.resetLineNumber">reset_line_number</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.resetMethodName">reset_method_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_class_name` <a name="reset_class_name" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.resetClassName"></a>

```python
def reset_class_name() -> None
```

##### `reset_code_unit` <a name="reset_code_unit" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.resetCodeUnit"></a>

```python
def reset_code_unit() -> None
```

##### `reset_line_number` <a name="reset_line_number" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.resetLineNumber"></a>

```python
def reset_line_number() -> None
```

##### `reset_method_name` <a name="reset_method_name" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.resetMethodName"></a>

```python
def reset_method_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.classNameInput">class_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.codeUnitInput">code_unit_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.filePathInput">file_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.languageInput">language_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.lineNumberInput">line_number_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.methodNameInput">method_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.className">class_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.codeUnit">code_unit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.filePath">file_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.language">language</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.lineNumber">line_number</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.methodName">method_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocation">ApplicationsignalsInstrumentationConfigLocationCodeLocation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `class_name_input`<sup>Optional</sup> <a name="class_name_input" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.classNameInput"></a>

```python
class_name_input: str
```

- *Type:* str

---

##### `code_unit_input`<sup>Optional</sup> <a name="code_unit_input" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.codeUnitInput"></a>

```python
code_unit_input: str
```

- *Type:* str

---

##### `file_path_input`<sup>Optional</sup> <a name="file_path_input" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.filePathInput"></a>

```python
file_path_input: str
```

- *Type:* str

---

##### `language_input`<sup>Optional</sup> <a name="language_input" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.languageInput"></a>

```python
language_input: str
```

- *Type:* str

---

##### `line_number_input`<sup>Optional</sup> <a name="line_number_input" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.lineNumberInput"></a>

```python
line_number_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `method_name_input`<sup>Optional</sup> <a name="method_name_input" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.methodNameInput"></a>

```python
method_name_input: str
```

- *Type:* str

---

##### `class_name`<sup>Required</sup> <a name="class_name" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.className"></a>

```python
class_name: str
```

- *Type:* str

---

##### `code_unit`<sup>Required</sup> <a name="code_unit" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.codeUnit"></a>

```python
code_unit: str
```

- *Type:* str

---

##### `file_path`<sup>Required</sup> <a name="file_path" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.filePath"></a>

```python
file_path: str
```

- *Type:* str

---

##### `language`<sup>Required</sup> <a name="language" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.language"></a>

```python
language: str
```

- *Type:* str

---

##### `line_number`<sup>Required</sup> <a name="line_number" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.lineNumber"></a>

```python
line_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `method_name`<sup>Required</sup> <a name="method_name" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.methodName"></a>

```python
method_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ApplicationsignalsInstrumentationConfigLocationCodeLocation
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocation">ApplicationsignalsInstrumentationConfigLocationCodeLocation</a>

---


### ApplicationsignalsInstrumentationConfigLocationOutputReference <a name="ApplicationsignalsInstrumentationConfigLocationOutputReference" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import applicationsignals_instrumentation_config

applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.putCodeLocation">put_code_location</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_code_location` <a name="put_code_location" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.putCodeLocation"></a>

```python
def put_code_location(
  file_path: str,
  language: str,
  class_name: str = None,
  code_unit: str = None,
  line_number: typing.Union[int, float] = None,
  method_name: str = None
) -> None
```

###### `file_path`<sup>Required</sup> <a name="file_path" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.putCodeLocation.parameter.filePath"></a>

- *Type:* str

The source file path relative to the project or source root.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#file_path ApplicationsignalsInstrumentationConfig#file_path}

---

###### `language`<sup>Required</sup> <a name="language" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.putCodeLocation.parameter.language"></a>

- *Type:* str

The programming language for this instrumentation point.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#language ApplicationsignalsInstrumentationConfig#language}

---

###### `class_name`<sup>Optional</sup> <a name="class_name" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.putCodeLocation.parameter.className"></a>

- *Type:* str

The class or type name that contains the method.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#class_name ApplicationsignalsInstrumentationConfig#class_name}

---

###### `code_unit`<sup>Optional</sup> <a name="code_unit" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.putCodeLocation.parameter.codeUnit"></a>

- *Type:* str

The package, module, or namespace that contains the target code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#code_unit ApplicationsignalsInstrumentationConfig#code_unit}

---

###### `line_number`<sup>Optional</sup> <a name="line_number" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.putCodeLocation.parameter.lineNumber"></a>

- *Type:* typing.Union[int, float]

The line number to instrument.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#line_number ApplicationsignalsInstrumentationConfig#line_number}

---

###### `method_name`<sup>Optional</sup> <a name="method_name" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.putCodeLocation.parameter.methodName"></a>

- *Type:* str

The method or function name to instrument.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#method_name ApplicationsignalsInstrumentationConfig#method_name}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.property.codeLocation">code_location</a></code> | <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference">ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.property.codeLocationInput">code_location_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocation">ApplicationsignalsInstrumentationConfigLocationCodeLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocation">ApplicationsignalsInstrumentationConfigLocation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `code_location`<sup>Required</sup> <a name="code_location" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.property.codeLocation"></a>

```python
code_location: ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference">ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference</a>

---

##### `code_location_input`<sup>Optional</sup> <a name="code_location_input" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.property.codeLocationInput"></a>

```python
code_location_input: IResolvable | ApplicationsignalsInstrumentationConfigLocationCodeLocation
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocation">ApplicationsignalsInstrumentationConfigLocationCodeLocation</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ApplicationsignalsInstrumentationConfigLocation
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocation">ApplicationsignalsInstrumentationConfigLocation</a>

---


### ApplicationsignalsInstrumentationConfigTagsList <a name="ApplicationsignalsInstrumentationConfigTagsList" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import applicationsignals_instrumentation_config

applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ApplicationsignalsInstrumentationConfigTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTags">ApplicationsignalsInstrumentationConfigTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ApplicationsignalsInstrumentationConfigTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTags">ApplicationsignalsInstrumentationConfigTags</a>]

---


### ApplicationsignalsInstrumentationConfigTagsOutputReference <a name="ApplicationsignalsInstrumentationConfigTagsOutputReference" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import applicationsignals_instrumentation_config

applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTags">ApplicationsignalsInstrumentationConfigTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ApplicationsignalsInstrumentationConfigTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTags">ApplicationsignalsInstrumentationConfigTags</a>

---



