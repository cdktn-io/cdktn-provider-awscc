# `apprunnerService` Submodule <a name="`apprunnerService` Submodule" id="@cdktn/provider-awscc.apprunnerService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApprunnerService <a name="ApprunnerService" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_service awscc_apprunner_service}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.Initializer"></a>

```python
from cdktn_provider_awscc import apprunner_service

apprunnerService.ApprunnerService(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  source_configuration: ApprunnerServiceSourceConfiguration,
  auto_scaling_configuration_arn: str = None,
  encryption_configuration: ApprunnerServiceEncryptionConfiguration = None,
  health_check_configuration: ApprunnerServiceHealthCheckConfiguration = None,
  instance_configuration: ApprunnerServiceInstanceConfiguration = None,
  network_configuration: ApprunnerServiceNetworkConfiguration = None,
  observability_configuration: ApprunnerServiceObservabilityConfiguration = None,
  service_name: str = None,
  tags: IResolvable | typing.List[ApprunnerServiceTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.Initializer.parameter.sourceConfiguration">source_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfiguration">ApprunnerServiceSourceConfiguration</a></code> | Source Code configuration. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.Initializer.parameter.autoScalingConfigurationArn">auto_scaling_configuration_arn</a></code> | <code>str</code> | Autoscaling configuration ARN. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.Initializer.parameter.encryptionConfiguration">encryption_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfiguration">ApprunnerServiceEncryptionConfiguration</a></code> | Encryption configuration (KMS key). |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.Initializer.parameter.healthCheckConfiguration">health_check_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfiguration">ApprunnerServiceHealthCheckConfiguration</a></code> | Health check configuration. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.Initializer.parameter.instanceConfiguration">instance_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfiguration">ApprunnerServiceInstanceConfiguration</a></code> | Instance Configuration. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.Initializer.parameter.networkConfiguration">network_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfiguration">ApprunnerServiceNetworkConfiguration</a></code> | Network configuration. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.Initializer.parameter.observabilityConfiguration">observability_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfiguration">ApprunnerServiceObservabilityConfiguration</a></code> | Service observability configuration. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.Initializer.parameter.serviceName">service_name</a></code> | <code>str</code> | The AppRunner Service Name. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTags">ApprunnerServiceTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_service#tags ApprunnerService#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `source_configuration`<sup>Required</sup> <a name="source_configuration" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.Initializer.parameter.sourceConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfiguration">ApprunnerServiceSourceConfiguration</a>

Source Code configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_service#source_configuration ApprunnerService#source_configuration}

---

##### `auto_scaling_configuration_arn`<sup>Optional</sup> <a name="auto_scaling_configuration_arn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.Initializer.parameter.autoScalingConfigurationArn"></a>

- *Type:* str

Autoscaling configuration ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_service#auto_scaling_configuration_arn ApprunnerService#auto_scaling_configuration_arn}

---

##### `encryption_configuration`<sup>Optional</sup> <a name="encryption_configuration" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.Initializer.parameter.encryptionConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfiguration">ApprunnerServiceEncryptionConfiguration</a>

Encryption configuration (KMS key).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_service#encryption_configuration ApprunnerService#encryption_configuration}

---

##### `health_check_configuration`<sup>Optional</sup> <a name="health_check_configuration" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.Initializer.parameter.healthCheckConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfiguration">ApprunnerServiceHealthCheckConfiguration</a>

Health check configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_service#health_check_configuration ApprunnerService#health_check_configuration}

---

##### `instance_configuration`<sup>Optional</sup> <a name="instance_configuration" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.Initializer.parameter.instanceConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfiguration">ApprunnerServiceInstanceConfiguration</a>

Instance Configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_service#instance_configuration ApprunnerService#instance_configuration}

---

##### `network_configuration`<sup>Optional</sup> <a name="network_configuration" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.Initializer.parameter.networkConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfiguration">ApprunnerServiceNetworkConfiguration</a>

Network configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_service#network_configuration ApprunnerService#network_configuration}

---

##### `observability_configuration`<sup>Optional</sup> <a name="observability_configuration" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.Initializer.parameter.observabilityConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfiguration">ApprunnerServiceObservabilityConfiguration</a>

Service observability configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_service#observability_configuration ApprunnerService#observability_configuration}

---

##### `service_name`<sup>Optional</sup> <a name="service_name" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.Initializer.parameter.serviceName"></a>

- *Type:* str

The AppRunner Service Name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_service#service_name ApprunnerService#service_name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTags">ApprunnerServiceTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_service#tags ApprunnerService#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.putEncryptionConfiguration">put_encryption_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.putHealthCheckConfiguration">put_health_check_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.putInstanceConfiguration">put_instance_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.putNetworkConfiguration">put_network_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.putObservabilityConfiguration">put_observability_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.putSourceConfiguration">put_source_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.resetAutoScalingConfigurationArn">reset_auto_scaling_configuration_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.resetEncryptionConfiguration">reset_encryption_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.resetHealthCheckConfiguration">reset_health_check_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.resetInstanceConfiguration">reset_instance_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.resetNetworkConfiguration">reset_network_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.resetObservabilityConfiguration">reset_observability_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.resetServiceName">reset_service_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_encryption_configuration` <a name="put_encryption_configuration" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.putEncryptionConfiguration"></a>

```python
def put_encryption_configuration(
  kms_key: str = None
) -> None
```

###### `kms_key`<sup>Optional</sup> <a name="kms_key" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.putEncryptionConfiguration.parameter.kmsKey"></a>

- *Type:* str

The KMS Key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_service#kms_key ApprunnerService#kms_key}

---

##### `put_health_check_configuration` <a name="put_health_check_configuration" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.putHealthCheckConfiguration"></a>

```python
def put_health_check_configuration(
  healthy_threshold: typing.Union[int, float] = None,
  interval: typing.Union[int, float] = None,
  path: str = None,
  protocol: str = None,
  timeout: typing.Union[int, float] = None,
  unhealthy_threshold: typing.Union[int, float] = None
) -> None
```

###### `healthy_threshold`<sup>Optional</sup> <a name="healthy_threshold" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.putHealthCheckConfiguration.parameter.healthyThreshold"></a>

- *Type:* typing.Union[int, float]

Health check Healthy Threshold.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_service#healthy_threshold ApprunnerService#healthy_threshold}

---

###### `interval`<sup>Optional</sup> <a name="interval" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.putHealthCheckConfiguration.parameter.interval"></a>

- *Type:* typing.Union[int, float]

Health check Interval.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_service#interval ApprunnerService#interval}

---

###### `path`<sup>Optional</sup> <a name="path" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.putHealthCheckConfiguration.parameter.path"></a>

- *Type:* str

Health check Path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_service#path ApprunnerService#path}

---

###### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.putHealthCheckConfiguration.parameter.protocol"></a>

- *Type:* str

Health Check Protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_service#protocol ApprunnerService#protocol}

---

###### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.putHealthCheckConfiguration.parameter.timeout"></a>

- *Type:* typing.Union[int, float]

Health check Timeout.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_service#timeout ApprunnerService#timeout}

---

###### `unhealthy_threshold`<sup>Optional</sup> <a name="unhealthy_threshold" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.putHealthCheckConfiguration.parameter.unhealthyThreshold"></a>

- *Type:* typing.Union[int, float]

Health check Unhealthy Threshold.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_service#unhealthy_threshold ApprunnerService#unhealthy_threshold}

---

##### `put_instance_configuration` <a name="put_instance_configuration" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.putInstanceConfiguration"></a>

```python
def put_instance_configuration(
  cpu: str = None,
  instance_role_arn: str = None,
  memory: str = None
) -> None
```

###### `cpu`<sup>Optional</sup> <a name="cpu" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.putInstanceConfiguration.parameter.cpu"></a>

- *Type:* str

CPU.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_service#cpu ApprunnerService#cpu}

---

###### `instance_role_arn`<sup>Optional</sup> <a name="instance_role_arn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.putInstanceConfiguration.parameter.instanceRoleArn"></a>

- *Type:* str

Instance Role Arn.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_service#instance_role_arn ApprunnerService#instance_role_arn}

---

###### `memory`<sup>Optional</sup> <a name="memory" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.putInstanceConfiguration.parameter.memory"></a>

- *Type:* str

Memory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_service#memory ApprunnerService#memory}

---

##### `put_network_configuration` <a name="put_network_configuration" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.putNetworkConfiguration"></a>

```python
def put_network_configuration(
  egress_configuration: ApprunnerServiceNetworkConfigurationEgressConfiguration = None,
  ingress_configuration: ApprunnerServiceNetworkConfigurationIngressConfiguration = None,
  ip_address_type: str = None
) -> None
```

###### `egress_configuration`<sup>Optional</sup> <a name="egress_configuration" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.putNetworkConfiguration.parameter.egressConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfiguration">ApprunnerServiceNetworkConfigurationEgressConfiguration</a>

Network egress configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_service#egress_configuration ApprunnerService#egress_configuration}

---

###### `ingress_configuration`<sup>Optional</sup> <a name="ingress_configuration" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.putNetworkConfiguration.parameter.ingressConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfiguration">ApprunnerServiceNetworkConfigurationIngressConfiguration</a>

Network ingress configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_service#ingress_configuration ApprunnerService#ingress_configuration}

---

###### `ip_address_type`<sup>Optional</sup> <a name="ip_address_type" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.putNetworkConfiguration.parameter.ipAddressType"></a>

- *Type:* str

App Runner service endpoint IP address type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_service#ip_address_type ApprunnerService#ip_address_type}

---

##### `put_observability_configuration` <a name="put_observability_configuration" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.putObservabilityConfiguration"></a>

```python
def put_observability_configuration(
  observability_configuration_arn: str = None,
  observability_enabled: bool | IResolvable = None
) -> None
```

###### `observability_configuration_arn`<sup>Optional</sup> <a name="observability_configuration_arn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.putObservabilityConfiguration.parameter.observabilityConfigurationArn"></a>

- *Type:* str

The Amazon Resource Name (ARN) of the App Runner ObservabilityConfiguration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_service#observability_configuration_arn ApprunnerService#observability_configuration_arn}

---

###### `observability_enabled`<sup>Optional</sup> <a name="observability_enabled" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.putObservabilityConfiguration.parameter.observabilityEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Observability enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_service#observability_enabled ApprunnerService#observability_enabled}

---

##### `put_source_configuration` <a name="put_source_configuration" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.putSourceConfiguration"></a>

```python
def put_source_configuration(
  authentication_configuration: ApprunnerServiceSourceConfigurationAuthenticationConfiguration = None,
  auto_deployments_enabled: bool | IResolvable = None,
  code_repository: ApprunnerServiceSourceConfigurationCodeRepository = None,
  image_repository: ApprunnerServiceSourceConfigurationImageRepository = None
) -> None
```

###### `authentication_configuration`<sup>Optional</sup> <a name="authentication_configuration" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.putSourceConfiguration.parameter.authenticationConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfiguration">ApprunnerServiceSourceConfigurationAuthenticationConfiguration</a>

Authentication Configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_service#authentication_configuration ApprunnerService#authentication_configuration}

---

###### `auto_deployments_enabled`<sup>Optional</sup> <a name="auto_deployments_enabled" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.putSourceConfiguration.parameter.autoDeploymentsEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Auto Deployment enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_service#auto_deployments_enabled ApprunnerService#auto_deployments_enabled}

---

###### `code_repository`<sup>Optional</sup> <a name="code_repository" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.putSourceConfiguration.parameter.codeRepository"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepository">ApprunnerServiceSourceConfigurationCodeRepository</a>

Source Code Repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_service#code_repository ApprunnerService#code_repository}

---

###### `image_repository`<sup>Optional</sup> <a name="image_repository" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.putSourceConfiguration.parameter.imageRepository"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepository">ApprunnerServiceSourceConfigurationImageRepository</a>

Image Repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_service#image_repository ApprunnerService#image_repository}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[ApprunnerServiceTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTags">ApprunnerServiceTags</a>]

---

##### `reset_auto_scaling_configuration_arn` <a name="reset_auto_scaling_configuration_arn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.resetAutoScalingConfigurationArn"></a>

```python
def reset_auto_scaling_configuration_arn() -> None
```

##### `reset_encryption_configuration` <a name="reset_encryption_configuration" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.resetEncryptionConfiguration"></a>

```python
def reset_encryption_configuration() -> None
```

##### `reset_health_check_configuration` <a name="reset_health_check_configuration" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.resetHealthCheckConfiguration"></a>

```python
def reset_health_check_configuration() -> None
```

##### `reset_instance_configuration` <a name="reset_instance_configuration" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.resetInstanceConfiguration"></a>

```python
def reset_instance_configuration() -> None
```

##### `reset_network_configuration` <a name="reset_network_configuration" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.resetNetworkConfiguration"></a>

```python
def reset_network_configuration() -> None
```

##### `reset_observability_configuration` <a name="reset_observability_configuration" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.resetObservabilityConfiguration"></a>

```python
def reset_observability_configuration() -> None
```

##### `reset_service_name` <a name="reset_service_name" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.resetServiceName"></a>

```python
def reset_service_name() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a ApprunnerService resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.isConstruct"></a>

```python
from cdktn_provider_awscc import apprunner_service

apprunnerService.ApprunnerService.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.isTerraformElement"></a>

```python
from cdktn_provider_awscc import apprunner_service

apprunnerService.ApprunnerService.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.isTerraformResource"></a>

```python
from cdktn_provider_awscc import apprunner_service

apprunnerService.ApprunnerService.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import apprunner_service

apprunnerService.ApprunnerService.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a ApprunnerService resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ApprunnerService to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ApprunnerService that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_service#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ApprunnerService to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.encryptionConfiguration">encryption_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference">ApprunnerServiceEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.healthCheckConfiguration">health_check_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference">ApprunnerServiceHealthCheckConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.instanceConfiguration">instance_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference">ApprunnerServiceInstanceConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.networkConfiguration">network_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference">ApprunnerServiceNetworkConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.observabilityConfiguration">observability_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference">ApprunnerServiceObservabilityConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.serviceArn">service_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.serviceId">service_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.serviceUrl">service_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.sourceConfiguration">source_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference">ApprunnerServiceSourceConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsList">ApprunnerServiceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.autoScalingConfigurationArnInput">auto_scaling_configuration_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.encryptionConfigurationInput">encryption_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfiguration">ApprunnerServiceEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.healthCheckConfigurationInput">health_check_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfiguration">ApprunnerServiceHealthCheckConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.instanceConfigurationInput">instance_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfiguration">ApprunnerServiceInstanceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.networkConfigurationInput">network_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfiguration">ApprunnerServiceNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.observabilityConfigurationInput">observability_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfiguration">ApprunnerServiceObservabilityConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.serviceNameInput">service_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.sourceConfigurationInput">source_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfiguration">ApprunnerServiceSourceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTags">ApprunnerServiceTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.autoScalingConfigurationArn">auto_scaling_configuration_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.serviceName">service_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `encryption_configuration`<sup>Required</sup> <a name="encryption_configuration" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.encryptionConfiguration"></a>

```python
encryption_configuration: ApprunnerServiceEncryptionConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference">ApprunnerServiceEncryptionConfigurationOutputReference</a>

---

##### `health_check_configuration`<sup>Required</sup> <a name="health_check_configuration" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.healthCheckConfiguration"></a>

```python
health_check_configuration: ApprunnerServiceHealthCheckConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference">ApprunnerServiceHealthCheckConfigurationOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `instance_configuration`<sup>Required</sup> <a name="instance_configuration" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.instanceConfiguration"></a>

```python
instance_configuration: ApprunnerServiceInstanceConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference">ApprunnerServiceInstanceConfigurationOutputReference</a>

---

##### `network_configuration`<sup>Required</sup> <a name="network_configuration" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.networkConfiguration"></a>

```python
network_configuration: ApprunnerServiceNetworkConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference">ApprunnerServiceNetworkConfigurationOutputReference</a>

---

##### `observability_configuration`<sup>Required</sup> <a name="observability_configuration" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.observabilityConfiguration"></a>

```python
observability_configuration: ApprunnerServiceObservabilityConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference">ApprunnerServiceObservabilityConfigurationOutputReference</a>

---

##### `service_arn`<sup>Required</sup> <a name="service_arn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.serviceArn"></a>

```python
service_arn: str
```

- *Type:* str

---

##### `service_id`<sup>Required</sup> <a name="service_id" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.serviceId"></a>

```python
service_id: str
```

- *Type:* str

---

##### `service_url`<sup>Required</sup> <a name="service_url" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.serviceUrl"></a>

```python
service_url: str
```

- *Type:* str

---

##### `source_configuration`<sup>Required</sup> <a name="source_configuration" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.sourceConfiguration"></a>

```python
source_configuration: ApprunnerServiceSourceConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference">ApprunnerServiceSourceConfigurationOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.tags"></a>

```python
tags: ApprunnerServiceTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsList">ApprunnerServiceTagsList</a>

---

##### `auto_scaling_configuration_arn_input`<sup>Optional</sup> <a name="auto_scaling_configuration_arn_input" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.autoScalingConfigurationArnInput"></a>

```python
auto_scaling_configuration_arn_input: str
```

- *Type:* str

---

##### `encryption_configuration_input`<sup>Optional</sup> <a name="encryption_configuration_input" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.encryptionConfigurationInput"></a>

```python
encryption_configuration_input: IResolvable | ApprunnerServiceEncryptionConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfiguration">ApprunnerServiceEncryptionConfiguration</a>

---

##### `health_check_configuration_input`<sup>Optional</sup> <a name="health_check_configuration_input" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.healthCheckConfigurationInput"></a>

```python
health_check_configuration_input: IResolvable | ApprunnerServiceHealthCheckConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfiguration">ApprunnerServiceHealthCheckConfiguration</a>

---

##### `instance_configuration_input`<sup>Optional</sup> <a name="instance_configuration_input" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.instanceConfigurationInput"></a>

```python
instance_configuration_input: IResolvable | ApprunnerServiceInstanceConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfiguration">ApprunnerServiceInstanceConfiguration</a>

---

##### `network_configuration_input`<sup>Optional</sup> <a name="network_configuration_input" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.networkConfigurationInput"></a>

```python
network_configuration_input: IResolvable | ApprunnerServiceNetworkConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfiguration">ApprunnerServiceNetworkConfiguration</a>

---

##### `observability_configuration_input`<sup>Optional</sup> <a name="observability_configuration_input" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.observabilityConfigurationInput"></a>

```python
observability_configuration_input: IResolvable | ApprunnerServiceObservabilityConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfiguration">ApprunnerServiceObservabilityConfiguration</a>

---

##### `service_name_input`<sup>Optional</sup> <a name="service_name_input" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.serviceNameInput"></a>

```python
service_name_input: str
```

- *Type:* str

---

##### `source_configuration_input`<sup>Optional</sup> <a name="source_configuration_input" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.sourceConfigurationInput"></a>

```python
source_configuration_input: IResolvable | ApprunnerServiceSourceConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfiguration">ApprunnerServiceSourceConfiguration</a>

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[ApprunnerServiceTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTags">ApprunnerServiceTags</a>]

---

##### `auto_scaling_configuration_arn`<sup>Required</sup> <a name="auto_scaling_configuration_arn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.autoScalingConfigurationArn"></a>

```python
auto_scaling_configuration_arn: str
```

- *Type:* str

---

##### `service_name`<sup>Required</sup> <a name="service_name" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.serviceName"></a>

```python
service_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ApprunnerServiceConfig <a name="ApprunnerServiceConfig" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceConfig.Initializer"></a>

```python
from cdktn_provider_awscc import apprunner_service

apprunnerService.ApprunnerServiceConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  source_configuration: ApprunnerServiceSourceConfiguration,
  auto_scaling_configuration_arn: str = None,
  encryption_configuration: ApprunnerServiceEncryptionConfiguration = None,
  health_check_configuration: ApprunnerServiceHealthCheckConfiguration = None,
  instance_configuration: ApprunnerServiceInstanceConfiguration = None,
  network_configuration: ApprunnerServiceNetworkConfiguration = None,
  observability_configuration: ApprunnerServiceObservabilityConfiguration = None,
  service_name: str = None,
  tags: IResolvable | typing.List[ApprunnerServiceTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceConfig.property.sourceConfiguration">source_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfiguration">ApprunnerServiceSourceConfiguration</a></code> | Source Code configuration. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceConfig.property.autoScalingConfigurationArn">auto_scaling_configuration_arn</a></code> | <code>str</code> | Autoscaling configuration ARN. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceConfig.property.encryptionConfiguration">encryption_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfiguration">ApprunnerServiceEncryptionConfiguration</a></code> | Encryption configuration (KMS key). |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceConfig.property.healthCheckConfiguration">health_check_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfiguration">ApprunnerServiceHealthCheckConfiguration</a></code> | Health check configuration. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceConfig.property.instanceConfiguration">instance_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfiguration">ApprunnerServiceInstanceConfiguration</a></code> | Instance Configuration. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceConfig.property.networkConfiguration">network_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfiguration">ApprunnerServiceNetworkConfiguration</a></code> | Network configuration. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceConfig.property.observabilityConfiguration">observability_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfiguration">ApprunnerServiceObservabilityConfiguration</a></code> | Service observability configuration. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceConfig.property.serviceName">service_name</a></code> | <code>str</code> | The AppRunner Service Name. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTags">ApprunnerServiceTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_service#tags ApprunnerService#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `source_configuration`<sup>Required</sup> <a name="source_configuration" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceConfig.property.sourceConfiguration"></a>

```python
source_configuration: ApprunnerServiceSourceConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfiguration">ApprunnerServiceSourceConfiguration</a>

Source Code configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_service#source_configuration ApprunnerService#source_configuration}

---

##### `auto_scaling_configuration_arn`<sup>Optional</sup> <a name="auto_scaling_configuration_arn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceConfig.property.autoScalingConfigurationArn"></a>

```python
auto_scaling_configuration_arn: str
```

- *Type:* str

Autoscaling configuration ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_service#auto_scaling_configuration_arn ApprunnerService#auto_scaling_configuration_arn}

---

##### `encryption_configuration`<sup>Optional</sup> <a name="encryption_configuration" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceConfig.property.encryptionConfiguration"></a>

```python
encryption_configuration: ApprunnerServiceEncryptionConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfiguration">ApprunnerServiceEncryptionConfiguration</a>

Encryption configuration (KMS key).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_service#encryption_configuration ApprunnerService#encryption_configuration}

---

##### `health_check_configuration`<sup>Optional</sup> <a name="health_check_configuration" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceConfig.property.healthCheckConfiguration"></a>

```python
health_check_configuration: ApprunnerServiceHealthCheckConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfiguration">ApprunnerServiceHealthCheckConfiguration</a>

Health check configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_service#health_check_configuration ApprunnerService#health_check_configuration}

---

##### `instance_configuration`<sup>Optional</sup> <a name="instance_configuration" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceConfig.property.instanceConfiguration"></a>

```python
instance_configuration: ApprunnerServiceInstanceConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfiguration">ApprunnerServiceInstanceConfiguration</a>

Instance Configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_service#instance_configuration ApprunnerService#instance_configuration}

---

##### `network_configuration`<sup>Optional</sup> <a name="network_configuration" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceConfig.property.networkConfiguration"></a>

```python
network_configuration: ApprunnerServiceNetworkConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfiguration">ApprunnerServiceNetworkConfiguration</a>

Network configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_service#network_configuration ApprunnerService#network_configuration}

---

##### `observability_configuration`<sup>Optional</sup> <a name="observability_configuration" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceConfig.property.observabilityConfiguration"></a>

```python
observability_configuration: ApprunnerServiceObservabilityConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfiguration">ApprunnerServiceObservabilityConfiguration</a>

Service observability configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_service#observability_configuration ApprunnerService#observability_configuration}

---

##### `service_name`<sup>Optional</sup> <a name="service_name" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceConfig.property.serviceName"></a>

```python
service_name: str
```

- *Type:* str

The AppRunner Service Name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_service#service_name ApprunnerService#service_name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[ApprunnerServiceTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTags">ApprunnerServiceTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_service#tags ApprunnerService#tags}.

---

### ApprunnerServiceEncryptionConfiguration <a name="ApprunnerServiceEncryptionConfiguration" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import apprunner_service

apprunnerService.ApprunnerServiceEncryptionConfiguration(
  kms_key: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfiguration.property.kmsKey">kms_key</a></code> | <code>str</code> | The KMS Key. |

---

##### `kms_key`<sup>Optional</sup> <a name="kms_key" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfiguration.property.kmsKey"></a>

```python
kms_key: str
```

- *Type:* str

The KMS Key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_service#kms_key ApprunnerService#kms_key}

---

### ApprunnerServiceHealthCheckConfiguration <a name="ApprunnerServiceHealthCheckConfiguration" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import apprunner_service

apprunnerService.ApprunnerServiceHealthCheckConfiguration(
  healthy_threshold: typing.Union[int, float] = None,
  interval: typing.Union[int, float] = None,
  path: str = None,
  protocol: str = None,
  timeout: typing.Union[int, float] = None,
  unhealthy_threshold: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfiguration.property.healthyThreshold">healthy_threshold</a></code> | <code>typing.Union[int, float]</code> | Health check Healthy Threshold. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfiguration.property.interval">interval</a></code> | <code>typing.Union[int, float]</code> | Health check Interval. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfiguration.property.path">path</a></code> | <code>str</code> | Health check Path. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfiguration.property.protocol">protocol</a></code> | <code>str</code> | Health Check Protocol. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfiguration.property.timeout">timeout</a></code> | <code>typing.Union[int, float]</code> | Health check Timeout. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfiguration.property.unhealthyThreshold">unhealthy_threshold</a></code> | <code>typing.Union[int, float]</code> | Health check Unhealthy Threshold. |

---

##### `healthy_threshold`<sup>Optional</sup> <a name="healthy_threshold" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfiguration.property.healthyThreshold"></a>

```python
healthy_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Health check Healthy Threshold.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_service#healthy_threshold ApprunnerService#healthy_threshold}

---

##### `interval`<sup>Optional</sup> <a name="interval" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfiguration.property.interval"></a>

```python
interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Health check Interval.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_service#interval ApprunnerService#interval}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfiguration.property.path"></a>

```python
path: str
```

- *Type:* str

Health check Path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_service#path ApprunnerService#path}

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfiguration.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

Health Check Protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_service#protocol ApprunnerService#protocol}

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfiguration.property.timeout"></a>

```python
timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Health check Timeout.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_service#timeout ApprunnerService#timeout}

---

##### `unhealthy_threshold`<sup>Optional</sup> <a name="unhealthy_threshold" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfiguration.property.unhealthyThreshold"></a>

```python
unhealthy_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Health check Unhealthy Threshold.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_service#unhealthy_threshold ApprunnerService#unhealthy_threshold}

---

### ApprunnerServiceInstanceConfiguration <a name="ApprunnerServiceInstanceConfiguration" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import apprunner_service

apprunnerService.ApprunnerServiceInstanceConfiguration(
  cpu: str = None,
  instance_role_arn: str = None,
  memory: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfiguration.property.cpu">cpu</a></code> | <code>str</code> | CPU. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfiguration.property.instanceRoleArn">instance_role_arn</a></code> | <code>str</code> | Instance Role Arn. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfiguration.property.memory">memory</a></code> | <code>str</code> | Memory. |

---

##### `cpu`<sup>Optional</sup> <a name="cpu" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfiguration.property.cpu"></a>

```python
cpu: str
```

- *Type:* str

CPU.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_service#cpu ApprunnerService#cpu}

---

##### `instance_role_arn`<sup>Optional</sup> <a name="instance_role_arn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfiguration.property.instanceRoleArn"></a>

```python
instance_role_arn: str
```

- *Type:* str

Instance Role Arn.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_service#instance_role_arn ApprunnerService#instance_role_arn}

---

##### `memory`<sup>Optional</sup> <a name="memory" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfiguration.property.memory"></a>

```python
memory: str
```

- *Type:* str

Memory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_service#memory ApprunnerService#memory}

---

### ApprunnerServiceNetworkConfiguration <a name="ApprunnerServiceNetworkConfiguration" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import apprunner_service

apprunnerService.ApprunnerServiceNetworkConfiguration(
  egress_configuration: ApprunnerServiceNetworkConfigurationEgressConfiguration = None,
  ingress_configuration: ApprunnerServiceNetworkConfigurationIngressConfiguration = None,
  ip_address_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfiguration.property.egressConfiguration">egress_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfiguration">ApprunnerServiceNetworkConfigurationEgressConfiguration</a></code> | Network egress configuration. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfiguration.property.ingressConfiguration">ingress_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfiguration">ApprunnerServiceNetworkConfigurationIngressConfiguration</a></code> | Network ingress configuration. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfiguration.property.ipAddressType">ip_address_type</a></code> | <code>str</code> | App Runner service endpoint IP address type. |

---

##### `egress_configuration`<sup>Optional</sup> <a name="egress_configuration" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfiguration.property.egressConfiguration"></a>

```python
egress_configuration: ApprunnerServiceNetworkConfigurationEgressConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfiguration">ApprunnerServiceNetworkConfigurationEgressConfiguration</a>

Network egress configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_service#egress_configuration ApprunnerService#egress_configuration}

---

##### `ingress_configuration`<sup>Optional</sup> <a name="ingress_configuration" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfiguration.property.ingressConfiguration"></a>

```python
ingress_configuration: ApprunnerServiceNetworkConfigurationIngressConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfiguration">ApprunnerServiceNetworkConfigurationIngressConfiguration</a>

Network ingress configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_service#ingress_configuration ApprunnerService#ingress_configuration}

---

##### `ip_address_type`<sup>Optional</sup> <a name="ip_address_type" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfiguration.property.ipAddressType"></a>

```python
ip_address_type: str
```

- *Type:* str

App Runner service endpoint IP address type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_service#ip_address_type ApprunnerService#ip_address_type}

---

### ApprunnerServiceNetworkConfigurationEgressConfiguration <a name="ApprunnerServiceNetworkConfigurationEgressConfiguration" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import apprunner_service

apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfiguration(
  egress_type: str = None,
  vpc_connector_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfiguration.property.egressType">egress_type</a></code> | <code>str</code> | Network egress type. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfiguration.property.vpcConnectorArn">vpc_connector_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the App Runner VpcConnector. |

---

##### `egress_type`<sup>Optional</sup> <a name="egress_type" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfiguration.property.egressType"></a>

```python
egress_type: str
```

- *Type:* str

Network egress type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_service#egress_type ApprunnerService#egress_type}

---

##### `vpc_connector_arn`<sup>Optional</sup> <a name="vpc_connector_arn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfiguration.property.vpcConnectorArn"></a>

```python
vpc_connector_arn: str
```

- *Type:* str

The Amazon Resource Name (ARN) of the App Runner VpcConnector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_service#vpc_connector_arn ApprunnerService#vpc_connector_arn}

---

### ApprunnerServiceNetworkConfigurationIngressConfiguration <a name="ApprunnerServiceNetworkConfigurationIngressConfiguration" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import apprunner_service

apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfiguration(
  is_publicly_accessible: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfiguration.property.isPubliclyAccessible">is_publicly_accessible</a></code> | <code>bool \| cdktn.IResolvable</code> | It's set to true if the Apprunner service is publicly accessible. It's set to false otherwise. |

---

##### `is_publicly_accessible`<sup>Optional</sup> <a name="is_publicly_accessible" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfiguration.property.isPubliclyAccessible"></a>

```python
is_publicly_accessible: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

It's set to true if the Apprunner service is publicly accessible. It's set to false otherwise.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_service#is_publicly_accessible ApprunnerService#is_publicly_accessible}

---

### ApprunnerServiceObservabilityConfiguration <a name="ApprunnerServiceObservabilityConfiguration" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import apprunner_service

apprunnerService.ApprunnerServiceObservabilityConfiguration(
  observability_configuration_arn: str = None,
  observability_enabled: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfiguration.property.observabilityConfigurationArn">observability_configuration_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the App Runner ObservabilityConfiguration. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfiguration.property.observabilityEnabled">observability_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Observability enabled. |

---

##### `observability_configuration_arn`<sup>Optional</sup> <a name="observability_configuration_arn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfiguration.property.observabilityConfigurationArn"></a>

```python
observability_configuration_arn: str
```

- *Type:* str

The Amazon Resource Name (ARN) of the App Runner ObservabilityConfiguration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_service#observability_configuration_arn ApprunnerService#observability_configuration_arn}

---

##### `observability_enabled`<sup>Optional</sup> <a name="observability_enabled" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfiguration.property.observabilityEnabled"></a>

```python
observability_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Observability enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_service#observability_enabled ApprunnerService#observability_enabled}

---

### ApprunnerServiceSourceConfiguration <a name="ApprunnerServiceSourceConfiguration" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import apprunner_service

apprunnerService.ApprunnerServiceSourceConfiguration(
  authentication_configuration: ApprunnerServiceSourceConfigurationAuthenticationConfiguration = None,
  auto_deployments_enabled: bool | IResolvable = None,
  code_repository: ApprunnerServiceSourceConfigurationCodeRepository = None,
  image_repository: ApprunnerServiceSourceConfigurationImageRepository = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfiguration.property.authenticationConfiguration">authentication_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfiguration">ApprunnerServiceSourceConfigurationAuthenticationConfiguration</a></code> | Authentication Configuration. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfiguration.property.autoDeploymentsEnabled">auto_deployments_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Auto Deployment enabled. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfiguration.property.codeRepository">code_repository</a></code> | <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepository">ApprunnerServiceSourceConfigurationCodeRepository</a></code> | Source Code Repository. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfiguration.property.imageRepository">image_repository</a></code> | <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepository">ApprunnerServiceSourceConfigurationImageRepository</a></code> | Image Repository. |

---

##### `authentication_configuration`<sup>Optional</sup> <a name="authentication_configuration" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfiguration.property.authenticationConfiguration"></a>

```python
authentication_configuration: ApprunnerServiceSourceConfigurationAuthenticationConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfiguration">ApprunnerServiceSourceConfigurationAuthenticationConfiguration</a>

Authentication Configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_service#authentication_configuration ApprunnerService#authentication_configuration}

---

##### `auto_deployments_enabled`<sup>Optional</sup> <a name="auto_deployments_enabled" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfiguration.property.autoDeploymentsEnabled"></a>

```python
auto_deployments_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Auto Deployment enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_service#auto_deployments_enabled ApprunnerService#auto_deployments_enabled}

---

##### `code_repository`<sup>Optional</sup> <a name="code_repository" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfiguration.property.codeRepository"></a>

```python
code_repository: ApprunnerServiceSourceConfigurationCodeRepository
```

- *Type:* <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepository">ApprunnerServiceSourceConfigurationCodeRepository</a>

Source Code Repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_service#code_repository ApprunnerService#code_repository}

---

##### `image_repository`<sup>Optional</sup> <a name="image_repository" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfiguration.property.imageRepository"></a>

```python
image_repository: ApprunnerServiceSourceConfigurationImageRepository
```

- *Type:* <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepository">ApprunnerServiceSourceConfigurationImageRepository</a>

Image Repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_service#image_repository ApprunnerService#image_repository}

---

### ApprunnerServiceSourceConfigurationAuthenticationConfiguration <a name="ApprunnerServiceSourceConfigurationAuthenticationConfiguration" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import apprunner_service

apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfiguration(
  access_role_arn: str = None,
  connection_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfiguration.property.accessRoleArn">access_role_arn</a></code> | <code>str</code> | Access Role Arn. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfiguration.property.connectionArn">connection_arn</a></code> | <code>str</code> | Connection Arn. |

---

##### `access_role_arn`<sup>Optional</sup> <a name="access_role_arn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfiguration.property.accessRoleArn"></a>

```python
access_role_arn: str
```

- *Type:* str

Access Role Arn.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_service#access_role_arn ApprunnerService#access_role_arn}

---

##### `connection_arn`<sup>Optional</sup> <a name="connection_arn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfiguration.property.connectionArn"></a>

```python
connection_arn: str
```

- *Type:* str

Connection Arn.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_service#connection_arn ApprunnerService#connection_arn}

---

### ApprunnerServiceSourceConfigurationCodeRepository <a name="ApprunnerServiceSourceConfigurationCodeRepository" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepository"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepository.Initializer"></a>

```python
from cdktn_provider_awscc import apprunner_service

apprunnerService.ApprunnerServiceSourceConfigurationCodeRepository(
  code_configuration: ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfiguration = None,
  repository_url: str = None,
  source_code_version: ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersion = None,
  source_directory: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepository.property.codeConfiguration">code_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfiguration">ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfiguration</a></code> | Code Configuration. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepository.property.repositoryUrl">repository_url</a></code> | <code>str</code> | Repository Url. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepository.property.sourceCodeVersion">source_code_version</a></code> | <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersion">ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersion</a></code> | Source Code Version. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepository.property.sourceDirectory">source_directory</a></code> | <code>str</code> | Source Directory. |

---

##### `code_configuration`<sup>Optional</sup> <a name="code_configuration" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepository.property.codeConfiguration"></a>

```python
code_configuration: ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfiguration">ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfiguration</a>

Code Configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_service#code_configuration ApprunnerService#code_configuration}

---

##### `repository_url`<sup>Optional</sup> <a name="repository_url" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepository.property.repositoryUrl"></a>

```python
repository_url: str
```

- *Type:* str

Repository Url.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_service#repository_url ApprunnerService#repository_url}

---

##### `source_code_version`<sup>Optional</sup> <a name="source_code_version" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepository.property.sourceCodeVersion"></a>

```python
source_code_version: ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersion
```

- *Type:* <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersion">ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersion</a>

Source Code Version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_service#source_code_version ApprunnerService#source_code_version}

---

##### `source_directory`<sup>Optional</sup> <a name="source_directory" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepository.property.sourceDirectory"></a>

```python
source_directory: str
```

- *Type:* str

Source Directory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_service#source_directory ApprunnerService#source_directory}

---

### ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfiguration <a name="ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfiguration" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import apprunner_service

apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfiguration(
  code_configuration_values: ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues = None,
  configuration_source: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfiguration.property.codeConfigurationValues">code_configuration_values</a></code> | <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues">ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues</a></code> | Code Configuration Values. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfiguration.property.configurationSource">configuration_source</a></code> | <code>str</code> | Configuration Source. |

---

##### `code_configuration_values`<sup>Optional</sup> <a name="code_configuration_values" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfiguration.property.codeConfigurationValues"></a>

```python
code_configuration_values: ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues
```

- *Type:* <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues">ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues</a>

Code Configuration Values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_service#code_configuration_values ApprunnerService#code_configuration_values}

---

##### `configuration_source`<sup>Optional</sup> <a name="configuration_source" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfiguration.property.configurationSource"></a>

```python
configuration_source: str
```

- *Type:* str

Configuration Source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_service#configuration_source ApprunnerService#configuration_source}

---

### ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues <a name="ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues.Initializer"></a>

```python
from cdktn_provider_awscc import apprunner_service

apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues(
  build_command: str = None,
  port: str = None,
  runtime: str = None,
  runtime_environment_secrets: IResolvable | typing.List[ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecrets] = None,
  runtime_environment_variables: IResolvable | typing.List[ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariables] = None,
  start_command: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues.property.buildCommand">build_command</a></code> | <code>str</code> | Build Command. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues.property.port">port</a></code> | <code>str</code> | Port. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues.property.runtime">runtime</a></code> | <code>str</code> | Runtime. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues.property.runtimeEnvironmentSecrets">runtime_environment_secrets</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecrets">ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecrets</a>]</code> | The secrets and parameters that get referenced by your service as environment variables. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues.property.runtimeEnvironmentVariables">runtime_environment_variables</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariables">ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariables</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_service#runtime_environment_variables ApprunnerService#runtime_environment_variables}. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues.property.startCommand">start_command</a></code> | <code>str</code> | Start Command. |

---

##### `build_command`<sup>Optional</sup> <a name="build_command" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues.property.buildCommand"></a>

```python
build_command: str
```

- *Type:* str

Build Command.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_service#build_command ApprunnerService#build_command}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues.property.port"></a>

```python
port: str
```

- *Type:* str

Port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_service#port ApprunnerService#port}

---

##### `runtime`<sup>Optional</sup> <a name="runtime" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues.property.runtime"></a>

```python
runtime: str
```

- *Type:* str

Runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_service#runtime ApprunnerService#runtime}

---

##### `runtime_environment_secrets`<sup>Optional</sup> <a name="runtime_environment_secrets" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues.property.runtimeEnvironmentSecrets"></a>

```python
runtime_environment_secrets: IResolvable | typing.List[ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecrets]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecrets">ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecrets</a>]

The secrets and parameters that get referenced by your service as environment variables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_service#runtime_environment_secrets ApprunnerService#runtime_environment_secrets}

---

##### `runtime_environment_variables`<sup>Optional</sup> <a name="runtime_environment_variables" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues.property.runtimeEnvironmentVariables"></a>

```python
runtime_environment_variables: IResolvable | typing.List[ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariables]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariables">ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariables</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_service#runtime_environment_variables ApprunnerService#runtime_environment_variables}.

---

##### `start_command`<sup>Optional</sup> <a name="start_command" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues.property.startCommand"></a>

```python
start_command: str
```

- *Type:* str

Start Command.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_service#start_command ApprunnerService#start_command}

---

### ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecrets <a name="ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecrets" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecrets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecrets.Initializer"></a>

```python
from cdktn_provider_awscc import apprunner_service

apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecrets(
  name: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecrets.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_service#name ApprunnerService#name}. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecrets.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_service#value ApprunnerService#value}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecrets.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_service#name ApprunnerService#name}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecrets.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_service#value ApprunnerService#value}.

---

### ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariables <a name="ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariables" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariables"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariables.Initializer"></a>

```python
from cdktn_provider_awscc import apprunner_service

apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariables(
  name: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariables.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_service#name ApprunnerService#name}. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariables.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_service#value ApprunnerService#value}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariables.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_service#name ApprunnerService#name}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariables.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_service#value ApprunnerService#value}.

---

### ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersion <a name="ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersion" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersion.Initializer"></a>

```python
from cdktn_provider_awscc import apprunner_service

apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersion(
  type: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersion.property.type">type</a></code> | <code>str</code> | Source Code Version Type. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersion.property.value">value</a></code> | <code>str</code> | Source Code Version Value. |

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersion.property.type"></a>

```python
type: str
```

- *Type:* str

Source Code Version Type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_service#type ApprunnerService#type}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersion.property.value"></a>

```python
value: str
```

- *Type:* str

Source Code Version Value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_service#value ApprunnerService#value}

---

### ApprunnerServiceSourceConfigurationImageRepository <a name="ApprunnerServiceSourceConfigurationImageRepository" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepository"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepository.Initializer"></a>

```python
from cdktn_provider_awscc import apprunner_service

apprunnerService.ApprunnerServiceSourceConfigurationImageRepository(
  image_configuration: ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration = None,
  image_identifier: str = None,
  image_repository_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepository.property.imageConfiguration">image_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration">ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration</a></code> | Image Configuration. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepository.property.imageIdentifier">image_identifier</a></code> | <code>str</code> | Image Identifier. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepository.property.imageRepositoryType">image_repository_type</a></code> | <code>str</code> | Image Repository Type. |

---

##### `image_configuration`<sup>Optional</sup> <a name="image_configuration" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepository.property.imageConfiguration"></a>

```python
image_configuration: ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration">ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration</a>

Image Configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_service#image_configuration ApprunnerService#image_configuration}

---

##### `image_identifier`<sup>Optional</sup> <a name="image_identifier" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepository.property.imageIdentifier"></a>

```python
image_identifier: str
```

- *Type:* str

Image Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_service#image_identifier ApprunnerService#image_identifier}

---

##### `image_repository_type`<sup>Optional</sup> <a name="image_repository_type" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepository.property.imageRepositoryType"></a>

```python
image_repository_type: str
```

- *Type:* str

Image Repository Type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_service#image_repository_type ApprunnerService#image_repository_type}

---

### ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration <a name="ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import apprunner_service

apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration(
  port: str = None,
  runtime_environment_secrets: IResolvable | typing.List[ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecrets] = None,
  runtime_environment_variables: IResolvable | typing.List[ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariables] = None,
  start_command: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration.property.port">port</a></code> | <code>str</code> | Port. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration.property.runtimeEnvironmentSecrets">runtime_environment_secrets</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecrets">ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecrets</a>]</code> | The secrets and parameters that get referenced by your service as environment variables. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration.property.runtimeEnvironmentVariables">runtime_environment_variables</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariables">ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariables</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_service#runtime_environment_variables ApprunnerService#runtime_environment_variables}. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration.property.startCommand">start_command</a></code> | <code>str</code> | Start Command. |

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration.property.port"></a>

```python
port: str
```

- *Type:* str

Port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_service#port ApprunnerService#port}

---

##### `runtime_environment_secrets`<sup>Optional</sup> <a name="runtime_environment_secrets" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration.property.runtimeEnvironmentSecrets"></a>

```python
runtime_environment_secrets: IResolvable | typing.List[ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecrets]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecrets">ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecrets</a>]

The secrets and parameters that get referenced by your service as environment variables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_service#runtime_environment_secrets ApprunnerService#runtime_environment_secrets}

---

##### `runtime_environment_variables`<sup>Optional</sup> <a name="runtime_environment_variables" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration.property.runtimeEnvironmentVariables"></a>

```python
runtime_environment_variables: IResolvable | typing.List[ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariables]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariables">ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariables</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_service#runtime_environment_variables ApprunnerService#runtime_environment_variables}.

---

##### `start_command`<sup>Optional</sup> <a name="start_command" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration.property.startCommand"></a>

```python
start_command: str
```

- *Type:* str

Start Command.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_service#start_command ApprunnerService#start_command}

---

### ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecrets <a name="ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecrets" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecrets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecrets.Initializer"></a>

```python
from cdktn_provider_awscc import apprunner_service

apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecrets(
  name: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecrets.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_service#name ApprunnerService#name}. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecrets.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_service#value ApprunnerService#value}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecrets.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_service#name ApprunnerService#name}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecrets.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_service#value ApprunnerService#value}.

---

### ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariables <a name="ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariables" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariables"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariables.Initializer"></a>

```python
from cdktn_provider_awscc import apprunner_service

apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariables(
  name: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariables.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_service#name ApprunnerService#name}. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariables.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_service#value ApprunnerService#value}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariables.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_service#name ApprunnerService#name}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariables.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_service#value ApprunnerService#value}.

---

### ApprunnerServiceTags <a name="ApprunnerServiceTags" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTags.Initializer"></a>

```python
from cdktn_provider_awscc import apprunner_service

apprunnerService.ApprunnerServiceTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_service#key ApprunnerService#key}. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_service#value ApprunnerService#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_service#key ApprunnerService#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_service#value ApprunnerService#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApprunnerServiceEncryptionConfigurationOutputReference <a name="ApprunnerServiceEncryptionConfigurationOutputReference" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import apprunner_service

apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.resetKmsKey">reset_kms_key</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_kms_key` <a name="reset_kms_key" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.resetKmsKey"></a>

```python
def reset_kms_key() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.property.kmsKeyInput">kms_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.property.kmsKey">kms_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfiguration">ApprunnerServiceEncryptionConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kms_key_input`<sup>Optional</sup> <a name="kms_key_input" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.property.kmsKeyInput"></a>

```python
kms_key_input: str
```

- *Type:* str

---

##### `kms_key`<sup>Required</sup> <a name="kms_key" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.property.kmsKey"></a>

```python
kms_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ApprunnerServiceEncryptionConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfiguration">ApprunnerServiceEncryptionConfiguration</a>

---


### ApprunnerServiceHealthCheckConfigurationOutputReference <a name="ApprunnerServiceHealthCheckConfigurationOutputReference" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import apprunner_service

apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.resetHealthyThreshold">reset_healthy_threshold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.resetInterval">reset_interval</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.resetPath">reset_path</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.resetProtocol">reset_protocol</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.resetTimeout">reset_timeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.resetUnhealthyThreshold">reset_unhealthy_threshold</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_healthy_threshold` <a name="reset_healthy_threshold" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.resetHealthyThreshold"></a>

```python
def reset_healthy_threshold() -> None
```

##### `reset_interval` <a name="reset_interval" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.resetInterval"></a>

```python
def reset_interval() -> None
```

##### `reset_path` <a name="reset_path" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.resetPath"></a>

```python
def reset_path() -> None
```

##### `reset_protocol` <a name="reset_protocol" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.resetProtocol"></a>

```python
def reset_protocol() -> None
```

##### `reset_timeout` <a name="reset_timeout" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.resetTimeout"></a>

```python
def reset_timeout() -> None
```

##### `reset_unhealthy_threshold` <a name="reset_unhealthy_threshold" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.resetUnhealthyThreshold"></a>

```python
def reset_unhealthy_threshold() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.property.healthyThresholdInput">healthy_threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.property.intervalInput">interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.property.protocolInput">protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.property.timeoutInput">timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.property.unhealthyThresholdInput">unhealthy_threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.property.healthyThreshold">healthy_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.property.interval">interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.property.timeout">timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.property.unhealthyThreshold">unhealthy_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfiguration">ApprunnerServiceHealthCheckConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `healthy_threshold_input`<sup>Optional</sup> <a name="healthy_threshold_input" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.property.healthyThresholdInput"></a>

```python
healthy_threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `interval_input`<sup>Optional</sup> <a name="interval_input" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.property.intervalInput"></a>

```python
interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `protocol_input`<sup>Optional</sup> <a name="protocol_input" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.property.protocolInput"></a>

```python
protocol_input: str
```

- *Type:* str

---

##### `timeout_input`<sup>Optional</sup> <a name="timeout_input" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.property.timeoutInput"></a>

```python
timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `unhealthy_threshold_input`<sup>Optional</sup> <a name="unhealthy_threshold_input" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.property.unhealthyThresholdInput"></a>

```python
unhealthy_threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `healthy_threshold`<sup>Required</sup> <a name="healthy_threshold" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.property.healthyThreshold"></a>

```python
healthy_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.property.interval"></a>

```python
interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.property.timeout"></a>

```python
timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `unhealthy_threshold`<sup>Required</sup> <a name="unhealthy_threshold" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.property.unhealthyThreshold"></a>

```python
unhealthy_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ApprunnerServiceHealthCheckConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfiguration">ApprunnerServiceHealthCheckConfiguration</a>

---


### ApprunnerServiceInstanceConfigurationOutputReference <a name="ApprunnerServiceInstanceConfigurationOutputReference" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import apprunner_service

apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.resetCpu">reset_cpu</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.resetInstanceRoleArn">reset_instance_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.resetMemory">reset_memory</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cpu` <a name="reset_cpu" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.resetCpu"></a>

```python
def reset_cpu() -> None
```

##### `reset_instance_role_arn` <a name="reset_instance_role_arn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.resetInstanceRoleArn"></a>

```python
def reset_instance_role_arn() -> None
```

##### `reset_memory` <a name="reset_memory" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.resetMemory"></a>

```python
def reset_memory() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.property.cpuInput">cpu_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.property.instanceRoleArnInput">instance_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.property.memoryInput">memory_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.property.cpu">cpu</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.property.instanceRoleArn">instance_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.property.memory">memory</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfiguration">ApprunnerServiceInstanceConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cpu_input`<sup>Optional</sup> <a name="cpu_input" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.property.cpuInput"></a>

```python
cpu_input: str
```

- *Type:* str

---

##### `instance_role_arn_input`<sup>Optional</sup> <a name="instance_role_arn_input" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.property.instanceRoleArnInput"></a>

```python
instance_role_arn_input: str
```

- *Type:* str

---

##### `memory_input`<sup>Optional</sup> <a name="memory_input" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.property.memoryInput"></a>

```python
memory_input: str
```

- *Type:* str

---

##### `cpu`<sup>Required</sup> <a name="cpu" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.property.cpu"></a>

```python
cpu: str
```

- *Type:* str

---

##### `instance_role_arn`<sup>Required</sup> <a name="instance_role_arn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.property.instanceRoleArn"></a>

```python
instance_role_arn: str
```

- *Type:* str

---

##### `memory`<sup>Required</sup> <a name="memory" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.property.memory"></a>

```python
memory: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ApprunnerServiceInstanceConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfiguration">ApprunnerServiceInstanceConfiguration</a>

---


### ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference <a name="ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import apprunner_service

apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.resetEgressType">reset_egress_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.resetVpcConnectorArn">reset_vpc_connector_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_egress_type` <a name="reset_egress_type" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.resetEgressType"></a>

```python
def reset_egress_type() -> None
```

##### `reset_vpc_connector_arn` <a name="reset_vpc_connector_arn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.resetVpcConnectorArn"></a>

```python
def reset_vpc_connector_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.property.egressTypeInput">egress_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.property.vpcConnectorArnInput">vpc_connector_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.property.egressType">egress_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.property.vpcConnectorArn">vpc_connector_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfiguration">ApprunnerServiceNetworkConfigurationEgressConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `egress_type_input`<sup>Optional</sup> <a name="egress_type_input" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.property.egressTypeInput"></a>

```python
egress_type_input: str
```

- *Type:* str

---

##### `vpc_connector_arn_input`<sup>Optional</sup> <a name="vpc_connector_arn_input" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.property.vpcConnectorArnInput"></a>

```python
vpc_connector_arn_input: str
```

- *Type:* str

---

##### `egress_type`<sup>Required</sup> <a name="egress_type" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.property.egressType"></a>

```python
egress_type: str
```

- *Type:* str

---

##### `vpc_connector_arn`<sup>Required</sup> <a name="vpc_connector_arn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.property.vpcConnectorArn"></a>

```python
vpc_connector_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ApprunnerServiceNetworkConfigurationEgressConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfiguration">ApprunnerServiceNetworkConfigurationEgressConfiguration</a>

---


### ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference <a name="ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import apprunner_service

apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.resetIsPubliclyAccessible">reset_is_publicly_accessible</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_is_publicly_accessible` <a name="reset_is_publicly_accessible" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.resetIsPubliclyAccessible"></a>

```python
def reset_is_publicly_accessible() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.property.isPubliclyAccessibleInput">is_publicly_accessible_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.property.isPubliclyAccessible">is_publicly_accessible</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfiguration">ApprunnerServiceNetworkConfigurationIngressConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_publicly_accessible_input`<sup>Optional</sup> <a name="is_publicly_accessible_input" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.property.isPubliclyAccessibleInput"></a>

```python
is_publicly_accessible_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `is_publicly_accessible`<sup>Required</sup> <a name="is_publicly_accessible" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.property.isPubliclyAccessible"></a>

```python
is_publicly_accessible: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ApprunnerServiceNetworkConfigurationIngressConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfiguration">ApprunnerServiceNetworkConfigurationIngressConfiguration</a>

---


### ApprunnerServiceNetworkConfigurationOutputReference <a name="ApprunnerServiceNetworkConfigurationOutputReference" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import apprunner_service

apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.putEgressConfiguration">put_egress_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.putIngressConfiguration">put_ingress_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.resetEgressConfiguration">reset_egress_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.resetIngressConfiguration">reset_ingress_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.resetIpAddressType">reset_ip_address_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_egress_configuration` <a name="put_egress_configuration" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.putEgressConfiguration"></a>

```python
def put_egress_configuration(
  egress_type: str = None,
  vpc_connector_arn: str = None
) -> None
```

###### `egress_type`<sup>Optional</sup> <a name="egress_type" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.putEgressConfiguration.parameter.egressType"></a>

- *Type:* str

Network egress type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_service#egress_type ApprunnerService#egress_type}

---

###### `vpc_connector_arn`<sup>Optional</sup> <a name="vpc_connector_arn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.putEgressConfiguration.parameter.vpcConnectorArn"></a>

- *Type:* str

The Amazon Resource Name (ARN) of the App Runner VpcConnector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_service#vpc_connector_arn ApprunnerService#vpc_connector_arn}

---

##### `put_ingress_configuration` <a name="put_ingress_configuration" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.putIngressConfiguration"></a>

```python
def put_ingress_configuration(
  is_publicly_accessible: bool | IResolvable = None
) -> None
```

###### `is_publicly_accessible`<sup>Optional</sup> <a name="is_publicly_accessible" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.putIngressConfiguration.parameter.isPubliclyAccessible"></a>

- *Type:* bool | cdktn.IResolvable

It's set to true if the Apprunner service is publicly accessible. It's set to false otherwise.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_service#is_publicly_accessible ApprunnerService#is_publicly_accessible}

---

##### `reset_egress_configuration` <a name="reset_egress_configuration" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.resetEgressConfiguration"></a>

```python
def reset_egress_configuration() -> None
```

##### `reset_ingress_configuration` <a name="reset_ingress_configuration" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.resetIngressConfiguration"></a>

```python
def reset_ingress_configuration() -> None
```

##### `reset_ip_address_type` <a name="reset_ip_address_type" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.resetIpAddressType"></a>

```python
def reset_ip_address_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.property.egressConfiguration">egress_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference">ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.property.ingressConfiguration">ingress_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference">ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.property.egressConfigurationInput">egress_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfiguration">ApprunnerServiceNetworkConfigurationEgressConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.property.ingressConfigurationInput">ingress_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfiguration">ApprunnerServiceNetworkConfigurationIngressConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.property.ipAddressTypeInput">ip_address_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.property.ipAddressType">ip_address_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfiguration">ApprunnerServiceNetworkConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `egress_configuration`<sup>Required</sup> <a name="egress_configuration" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.property.egressConfiguration"></a>

```python
egress_configuration: ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference">ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference</a>

---

##### `ingress_configuration`<sup>Required</sup> <a name="ingress_configuration" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.property.ingressConfiguration"></a>

```python
ingress_configuration: ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference">ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference</a>

---

##### `egress_configuration_input`<sup>Optional</sup> <a name="egress_configuration_input" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.property.egressConfigurationInput"></a>

```python
egress_configuration_input: IResolvable | ApprunnerServiceNetworkConfigurationEgressConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfiguration">ApprunnerServiceNetworkConfigurationEgressConfiguration</a>

---

##### `ingress_configuration_input`<sup>Optional</sup> <a name="ingress_configuration_input" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.property.ingressConfigurationInput"></a>

```python
ingress_configuration_input: IResolvable | ApprunnerServiceNetworkConfigurationIngressConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfiguration">ApprunnerServiceNetworkConfigurationIngressConfiguration</a>

---

##### `ip_address_type_input`<sup>Optional</sup> <a name="ip_address_type_input" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.property.ipAddressTypeInput"></a>

```python
ip_address_type_input: str
```

- *Type:* str

---

##### `ip_address_type`<sup>Required</sup> <a name="ip_address_type" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.property.ipAddressType"></a>

```python
ip_address_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ApprunnerServiceNetworkConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfiguration">ApprunnerServiceNetworkConfiguration</a>

---


### ApprunnerServiceObservabilityConfigurationOutputReference <a name="ApprunnerServiceObservabilityConfigurationOutputReference" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import apprunner_service

apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.resetObservabilityConfigurationArn">reset_observability_configuration_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.resetObservabilityEnabled">reset_observability_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_observability_configuration_arn` <a name="reset_observability_configuration_arn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.resetObservabilityConfigurationArn"></a>

```python
def reset_observability_configuration_arn() -> None
```

##### `reset_observability_enabled` <a name="reset_observability_enabled" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.resetObservabilityEnabled"></a>

```python
def reset_observability_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.property.observabilityConfigurationArnInput">observability_configuration_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.property.observabilityEnabledInput">observability_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.property.observabilityConfigurationArn">observability_configuration_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.property.observabilityEnabled">observability_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfiguration">ApprunnerServiceObservabilityConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `observability_configuration_arn_input`<sup>Optional</sup> <a name="observability_configuration_arn_input" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.property.observabilityConfigurationArnInput"></a>

```python
observability_configuration_arn_input: str
```

- *Type:* str

---

##### `observability_enabled_input`<sup>Optional</sup> <a name="observability_enabled_input" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.property.observabilityEnabledInput"></a>

```python
observability_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `observability_configuration_arn`<sup>Required</sup> <a name="observability_configuration_arn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.property.observabilityConfigurationArn"></a>

```python
observability_configuration_arn: str
```

- *Type:* str

---

##### `observability_enabled`<sup>Required</sup> <a name="observability_enabled" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.property.observabilityEnabled"></a>

```python
observability_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ApprunnerServiceObservabilityConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfiguration">ApprunnerServiceObservabilityConfiguration</a>

---


### ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference <a name="ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import apprunner_service

apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.resetAccessRoleArn">reset_access_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.resetConnectionArn">reset_connection_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_access_role_arn` <a name="reset_access_role_arn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.resetAccessRoleArn"></a>

```python
def reset_access_role_arn() -> None
```

##### `reset_connection_arn` <a name="reset_connection_arn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.resetConnectionArn"></a>

```python
def reset_connection_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.property.accessRoleArnInput">access_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.property.connectionArnInput">connection_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.property.accessRoleArn">access_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.property.connectionArn">connection_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfiguration">ApprunnerServiceSourceConfigurationAuthenticationConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `access_role_arn_input`<sup>Optional</sup> <a name="access_role_arn_input" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.property.accessRoleArnInput"></a>

```python
access_role_arn_input: str
```

- *Type:* str

---

##### `connection_arn_input`<sup>Optional</sup> <a name="connection_arn_input" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.property.connectionArnInput"></a>

```python
connection_arn_input: str
```

- *Type:* str

---

##### `access_role_arn`<sup>Required</sup> <a name="access_role_arn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.property.accessRoleArn"></a>

```python
access_role_arn: str
```

- *Type:* str

---

##### `connection_arn`<sup>Required</sup> <a name="connection_arn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.property.connectionArn"></a>

```python
connection_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ApprunnerServiceSourceConfigurationAuthenticationConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfiguration">ApprunnerServiceSourceConfigurationAuthenticationConfiguration</a>

---


### ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference <a name="ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import apprunner_service

apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.putRuntimeEnvironmentSecrets">put_runtime_environment_secrets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.putRuntimeEnvironmentVariables">put_runtime_environment_variables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.resetBuildCommand">reset_build_command</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.resetPort">reset_port</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.resetRuntime">reset_runtime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.resetRuntimeEnvironmentSecrets">reset_runtime_environment_secrets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.resetRuntimeEnvironmentVariables">reset_runtime_environment_variables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.resetStartCommand">reset_start_command</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_runtime_environment_secrets` <a name="put_runtime_environment_secrets" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.putRuntimeEnvironmentSecrets"></a>

```python
def put_runtime_environment_secrets(
  value: IResolvable | typing.List[ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecrets]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.putRuntimeEnvironmentSecrets.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecrets">ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecrets</a>]

---

##### `put_runtime_environment_variables` <a name="put_runtime_environment_variables" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.putRuntimeEnvironmentVariables"></a>

```python
def put_runtime_environment_variables(
  value: IResolvable | typing.List[ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariables]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.putRuntimeEnvironmentVariables.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariables">ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariables</a>]

---

##### `reset_build_command` <a name="reset_build_command" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.resetBuildCommand"></a>

```python
def reset_build_command() -> None
```

##### `reset_port` <a name="reset_port" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.resetPort"></a>

```python
def reset_port() -> None
```

##### `reset_runtime` <a name="reset_runtime" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.resetRuntime"></a>

```python
def reset_runtime() -> None
```

##### `reset_runtime_environment_secrets` <a name="reset_runtime_environment_secrets" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.resetRuntimeEnvironmentSecrets"></a>

```python
def reset_runtime_environment_secrets() -> None
```

##### `reset_runtime_environment_variables` <a name="reset_runtime_environment_variables" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.resetRuntimeEnvironmentVariables"></a>

```python
def reset_runtime_environment_variables() -> None
```

##### `reset_start_command` <a name="reset_start_command" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.resetStartCommand"></a>

```python
def reset_start_command() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.property.runtimeEnvironmentSecrets">runtime_environment_secrets</a></code> | <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsList">ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.property.runtimeEnvironmentVariables">runtime_environment_variables</a></code> | <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesList">ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.property.buildCommandInput">build_command_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.property.portInput">port_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.property.runtimeEnvironmentSecretsInput">runtime_environment_secrets_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecrets">ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecrets</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.property.runtimeEnvironmentVariablesInput">runtime_environment_variables_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariables">ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariables</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.property.runtimeInput">runtime_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.property.startCommandInput">start_command_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.property.buildCommand">build_command</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.property.port">port</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.property.runtime">runtime</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.property.startCommand">start_command</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues">ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `runtime_environment_secrets`<sup>Required</sup> <a name="runtime_environment_secrets" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.property.runtimeEnvironmentSecrets"></a>

```python
runtime_environment_secrets: ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsList
```

- *Type:* <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsList">ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsList</a>

---

##### `runtime_environment_variables`<sup>Required</sup> <a name="runtime_environment_variables" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.property.runtimeEnvironmentVariables"></a>

```python
runtime_environment_variables: ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesList
```

- *Type:* <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesList">ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesList</a>

---

##### `build_command_input`<sup>Optional</sup> <a name="build_command_input" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.property.buildCommandInput"></a>

```python
build_command_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.property.portInput"></a>

```python
port_input: str
```

- *Type:* str

---

##### `runtime_environment_secrets_input`<sup>Optional</sup> <a name="runtime_environment_secrets_input" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.property.runtimeEnvironmentSecretsInput"></a>

```python
runtime_environment_secrets_input: IResolvable | typing.List[ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecrets]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecrets">ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecrets</a>]

---

##### `runtime_environment_variables_input`<sup>Optional</sup> <a name="runtime_environment_variables_input" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.property.runtimeEnvironmentVariablesInput"></a>

```python
runtime_environment_variables_input: IResolvable | typing.List[ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariables]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariables">ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariables</a>]

---

##### `runtime_input`<sup>Optional</sup> <a name="runtime_input" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.property.runtimeInput"></a>

```python
runtime_input: str
```

- *Type:* str

---

##### `start_command_input`<sup>Optional</sup> <a name="start_command_input" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.property.startCommandInput"></a>

```python
start_command_input: str
```

- *Type:* str

---

##### `build_command`<sup>Required</sup> <a name="build_command" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.property.buildCommand"></a>

```python
build_command: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.property.port"></a>

```python
port: str
```

- *Type:* str

---

##### `runtime`<sup>Required</sup> <a name="runtime" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.property.runtime"></a>

```python
runtime: str
```

- *Type:* str

---

##### `start_command`<sup>Required</sup> <a name="start_command" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.property.startCommand"></a>

```python
start_command: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues">ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues</a>

---


### ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsList <a name="ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsList" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsList.Initializer"></a>

```python
from cdktn_provider_awscc import apprunner_service

apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecrets">ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecrets</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecrets]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecrets">ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecrets</a>]

---


### ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference <a name="ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import apprunner_service

apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecrets">ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecrets</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecrets
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecrets">ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecrets</a>

---


### ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesList <a name="ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesList" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesList.Initializer"></a>

```python
from cdktn_provider_awscc import apprunner_service

apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariables">ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariables</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariables]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariables">ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariables</a>]

---


### ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference <a name="ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import apprunner_service

apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariables">ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariables</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariables
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariables">ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariables</a>

---


### ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference <a name="ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import apprunner_service

apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.putCodeConfigurationValues">put_code_configuration_values</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.resetCodeConfigurationValues">reset_code_configuration_values</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.resetConfigurationSource">reset_configuration_source</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_code_configuration_values` <a name="put_code_configuration_values" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.putCodeConfigurationValues"></a>

```python
def put_code_configuration_values(
  build_command: str = None,
  port: str = None,
  runtime: str = None,
  runtime_environment_secrets: IResolvable | typing.List[ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecrets] = None,
  runtime_environment_variables: IResolvable | typing.List[ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariables] = None,
  start_command: str = None
) -> None
```

###### `build_command`<sup>Optional</sup> <a name="build_command" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.putCodeConfigurationValues.parameter.buildCommand"></a>

- *Type:* str

Build Command.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_service#build_command ApprunnerService#build_command}

---

###### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.putCodeConfigurationValues.parameter.port"></a>

- *Type:* str

Port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_service#port ApprunnerService#port}

---

###### `runtime`<sup>Optional</sup> <a name="runtime" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.putCodeConfigurationValues.parameter.runtime"></a>

- *Type:* str

Runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_service#runtime ApprunnerService#runtime}

---

###### `runtime_environment_secrets`<sup>Optional</sup> <a name="runtime_environment_secrets" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.putCodeConfigurationValues.parameter.runtimeEnvironmentSecrets"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecrets">ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecrets</a>]

The secrets and parameters that get referenced by your service as environment variables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_service#runtime_environment_secrets ApprunnerService#runtime_environment_secrets}

---

###### `runtime_environment_variables`<sup>Optional</sup> <a name="runtime_environment_variables" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.putCodeConfigurationValues.parameter.runtimeEnvironmentVariables"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariables">ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariables</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_service#runtime_environment_variables ApprunnerService#runtime_environment_variables}.

---

###### `start_command`<sup>Optional</sup> <a name="start_command" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.putCodeConfigurationValues.parameter.startCommand"></a>

- *Type:* str

Start Command.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_service#start_command ApprunnerService#start_command}

---

##### `reset_code_configuration_values` <a name="reset_code_configuration_values" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.resetCodeConfigurationValues"></a>

```python
def reset_code_configuration_values() -> None
```

##### `reset_configuration_source` <a name="reset_configuration_source" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.resetConfigurationSource"></a>

```python
def reset_configuration_source() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.property.codeConfigurationValues">code_configuration_values</a></code> | <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference">ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.property.codeConfigurationValuesInput">code_configuration_values_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues">ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.property.configurationSourceInput">configuration_source_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.property.configurationSource">configuration_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfiguration">ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `code_configuration_values`<sup>Required</sup> <a name="code_configuration_values" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.property.codeConfigurationValues"></a>

```python
code_configuration_values: ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference">ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference</a>

---

##### `code_configuration_values_input`<sup>Optional</sup> <a name="code_configuration_values_input" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.property.codeConfigurationValuesInput"></a>

```python
code_configuration_values_input: IResolvable | ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues">ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues</a>

---

##### `configuration_source_input`<sup>Optional</sup> <a name="configuration_source_input" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.property.configurationSourceInput"></a>

```python
configuration_source_input: str
```

- *Type:* str

---

##### `configuration_source`<sup>Required</sup> <a name="configuration_source" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.property.configurationSource"></a>

```python
configuration_source: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfiguration">ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfiguration</a>

---


### ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference <a name="ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import apprunner_service

apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.putCodeConfiguration">put_code_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.putSourceCodeVersion">put_source_code_version</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.resetCodeConfiguration">reset_code_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.resetRepositoryUrl">reset_repository_url</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.resetSourceCodeVersion">reset_source_code_version</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.resetSourceDirectory">reset_source_directory</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_code_configuration` <a name="put_code_configuration" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.putCodeConfiguration"></a>

```python
def put_code_configuration(
  code_configuration_values: ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues = None,
  configuration_source: str = None
) -> None
```

###### `code_configuration_values`<sup>Optional</sup> <a name="code_configuration_values" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.putCodeConfiguration.parameter.codeConfigurationValues"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues">ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues</a>

Code Configuration Values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_service#code_configuration_values ApprunnerService#code_configuration_values}

---

###### `configuration_source`<sup>Optional</sup> <a name="configuration_source" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.putCodeConfiguration.parameter.configurationSource"></a>

- *Type:* str

Configuration Source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_service#configuration_source ApprunnerService#configuration_source}

---

##### `put_source_code_version` <a name="put_source_code_version" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.putSourceCodeVersion"></a>

```python
def put_source_code_version(
  type: str = None,
  value: str = None
) -> None
```

###### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.putSourceCodeVersion.parameter.type"></a>

- *Type:* str

Source Code Version Type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_service#type ApprunnerService#type}

---

###### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.putSourceCodeVersion.parameter.value"></a>

- *Type:* str

Source Code Version Value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_service#value ApprunnerService#value}

---

##### `reset_code_configuration` <a name="reset_code_configuration" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.resetCodeConfiguration"></a>

```python
def reset_code_configuration() -> None
```

##### `reset_repository_url` <a name="reset_repository_url" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.resetRepositoryUrl"></a>

```python
def reset_repository_url() -> None
```

##### `reset_source_code_version` <a name="reset_source_code_version" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.resetSourceCodeVersion"></a>

```python
def reset_source_code_version() -> None
```

##### `reset_source_directory` <a name="reset_source_directory" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.resetSourceDirectory"></a>

```python
def reset_source_directory() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.property.codeConfiguration">code_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference">ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.property.sourceCodeVersion">source_code_version</a></code> | <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference">ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.property.codeConfigurationInput">code_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfiguration">ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.property.repositoryUrlInput">repository_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.property.sourceCodeVersionInput">source_code_version_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersion">ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.property.sourceDirectoryInput">source_directory_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.property.repositoryUrl">repository_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.property.sourceDirectory">source_directory</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepository">ApprunnerServiceSourceConfigurationCodeRepository</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `code_configuration`<sup>Required</sup> <a name="code_configuration" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.property.codeConfiguration"></a>

```python
code_configuration: ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference">ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference</a>

---

##### `source_code_version`<sup>Required</sup> <a name="source_code_version" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.property.sourceCodeVersion"></a>

```python
source_code_version: ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference">ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference</a>

---

##### `code_configuration_input`<sup>Optional</sup> <a name="code_configuration_input" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.property.codeConfigurationInput"></a>

```python
code_configuration_input: IResolvable | ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfiguration">ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfiguration</a>

---

##### `repository_url_input`<sup>Optional</sup> <a name="repository_url_input" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.property.repositoryUrlInput"></a>

```python
repository_url_input: str
```

- *Type:* str

---

##### `source_code_version_input`<sup>Optional</sup> <a name="source_code_version_input" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.property.sourceCodeVersionInput"></a>

```python
source_code_version_input: IResolvable | ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersion
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersion">ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersion</a>

---

##### `source_directory_input`<sup>Optional</sup> <a name="source_directory_input" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.property.sourceDirectoryInput"></a>

```python
source_directory_input: str
```

- *Type:* str

---

##### `repository_url`<sup>Required</sup> <a name="repository_url" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.property.repositoryUrl"></a>

```python
repository_url: str
```

- *Type:* str

---

##### `source_directory`<sup>Required</sup> <a name="source_directory" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.property.sourceDirectory"></a>

```python
source_directory: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ApprunnerServiceSourceConfigurationCodeRepository
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepository">ApprunnerServiceSourceConfigurationCodeRepository</a>

---


### ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference <a name="ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import apprunner_service

apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.resetType">reset_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_type` <a name="reset_type" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.resetType"></a>

```python
def reset_type() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersion">ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersion</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersion
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersion">ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersion</a>

---


### ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference <a name="ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import apprunner_service

apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.putRuntimeEnvironmentSecrets">put_runtime_environment_secrets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.putRuntimeEnvironmentVariables">put_runtime_environment_variables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.resetPort">reset_port</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.resetRuntimeEnvironmentSecrets">reset_runtime_environment_secrets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.resetRuntimeEnvironmentVariables">reset_runtime_environment_variables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.resetStartCommand">reset_start_command</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_runtime_environment_secrets` <a name="put_runtime_environment_secrets" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.putRuntimeEnvironmentSecrets"></a>

```python
def put_runtime_environment_secrets(
  value: IResolvable | typing.List[ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecrets]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.putRuntimeEnvironmentSecrets.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecrets">ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecrets</a>]

---

##### `put_runtime_environment_variables` <a name="put_runtime_environment_variables" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.putRuntimeEnvironmentVariables"></a>

```python
def put_runtime_environment_variables(
  value: IResolvable | typing.List[ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariables]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.putRuntimeEnvironmentVariables.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariables">ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariables</a>]

---

##### `reset_port` <a name="reset_port" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.resetPort"></a>

```python
def reset_port() -> None
```

##### `reset_runtime_environment_secrets` <a name="reset_runtime_environment_secrets" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.resetRuntimeEnvironmentSecrets"></a>

```python
def reset_runtime_environment_secrets() -> None
```

##### `reset_runtime_environment_variables` <a name="reset_runtime_environment_variables" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.resetRuntimeEnvironmentVariables"></a>

```python
def reset_runtime_environment_variables() -> None
```

##### `reset_start_command` <a name="reset_start_command" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.resetStartCommand"></a>

```python
def reset_start_command() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.property.runtimeEnvironmentSecrets">runtime_environment_secrets</a></code> | <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsList">ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.property.runtimeEnvironmentVariables">runtime_environment_variables</a></code> | <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesList">ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.property.portInput">port_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.property.runtimeEnvironmentSecretsInput">runtime_environment_secrets_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecrets">ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecrets</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.property.runtimeEnvironmentVariablesInput">runtime_environment_variables_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariables">ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariables</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.property.startCommandInput">start_command_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.property.port">port</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.property.startCommand">start_command</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration">ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `runtime_environment_secrets`<sup>Required</sup> <a name="runtime_environment_secrets" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.property.runtimeEnvironmentSecrets"></a>

```python
runtime_environment_secrets: ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsList
```

- *Type:* <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsList">ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsList</a>

---

##### `runtime_environment_variables`<sup>Required</sup> <a name="runtime_environment_variables" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.property.runtimeEnvironmentVariables"></a>

```python
runtime_environment_variables: ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesList
```

- *Type:* <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesList">ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesList</a>

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.property.portInput"></a>

```python
port_input: str
```

- *Type:* str

---

##### `runtime_environment_secrets_input`<sup>Optional</sup> <a name="runtime_environment_secrets_input" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.property.runtimeEnvironmentSecretsInput"></a>

```python
runtime_environment_secrets_input: IResolvable | typing.List[ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecrets]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecrets">ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecrets</a>]

---

##### `runtime_environment_variables_input`<sup>Optional</sup> <a name="runtime_environment_variables_input" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.property.runtimeEnvironmentVariablesInput"></a>

```python
runtime_environment_variables_input: IResolvable | typing.List[ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariables]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariables">ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariables</a>]

---

##### `start_command_input`<sup>Optional</sup> <a name="start_command_input" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.property.startCommandInput"></a>

```python
start_command_input: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.property.port"></a>

```python
port: str
```

- *Type:* str

---

##### `start_command`<sup>Required</sup> <a name="start_command" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.property.startCommand"></a>

```python
start_command: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration">ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration</a>

---


### ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsList <a name="ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsList" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsList.Initializer"></a>

```python
from cdktn_provider_awscc import apprunner_service

apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecrets">ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecrets</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecrets]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecrets">ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecrets</a>]

---


### ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference <a name="ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import apprunner_service

apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecrets">ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecrets</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecrets
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecrets">ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecrets</a>

---


### ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesList <a name="ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesList" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesList.Initializer"></a>

```python
from cdktn_provider_awscc import apprunner_service

apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariables">ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariables</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariables]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariables">ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariables</a>]

---


### ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference <a name="ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import apprunner_service

apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariables">ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariables</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariables
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariables">ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariables</a>

---


### ApprunnerServiceSourceConfigurationImageRepositoryOutputReference <a name="ApprunnerServiceSourceConfigurationImageRepositoryOutputReference" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import apprunner_service

apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.putImageConfiguration">put_image_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.resetImageConfiguration">reset_image_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.resetImageIdentifier">reset_image_identifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.resetImageRepositoryType">reset_image_repository_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_image_configuration` <a name="put_image_configuration" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.putImageConfiguration"></a>

```python
def put_image_configuration(
  port: str = None,
  runtime_environment_secrets: IResolvable | typing.List[ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecrets] = None,
  runtime_environment_variables: IResolvable | typing.List[ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariables] = None,
  start_command: str = None
) -> None
```

###### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.putImageConfiguration.parameter.port"></a>

- *Type:* str

Port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_service#port ApprunnerService#port}

---

###### `runtime_environment_secrets`<sup>Optional</sup> <a name="runtime_environment_secrets" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.putImageConfiguration.parameter.runtimeEnvironmentSecrets"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecrets">ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecrets</a>]

The secrets and parameters that get referenced by your service as environment variables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_service#runtime_environment_secrets ApprunnerService#runtime_environment_secrets}

---

###### `runtime_environment_variables`<sup>Optional</sup> <a name="runtime_environment_variables" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.putImageConfiguration.parameter.runtimeEnvironmentVariables"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariables">ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariables</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_service#runtime_environment_variables ApprunnerService#runtime_environment_variables}.

---

###### `start_command`<sup>Optional</sup> <a name="start_command" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.putImageConfiguration.parameter.startCommand"></a>

- *Type:* str

Start Command.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_service#start_command ApprunnerService#start_command}

---

##### `reset_image_configuration` <a name="reset_image_configuration" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.resetImageConfiguration"></a>

```python
def reset_image_configuration() -> None
```

##### `reset_image_identifier` <a name="reset_image_identifier" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.resetImageIdentifier"></a>

```python
def reset_image_identifier() -> None
```

##### `reset_image_repository_type` <a name="reset_image_repository_type" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.resetImageRepositoryType"></a>

```python
def reset_image_repository_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.property.imageConfiguration">image_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference">ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.property.imageConfigurationInput">image_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration">ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.property.imageIdentifierInput">image_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.property.imageRepositoryTypeInput">image_repository_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.property.imageIdentifier">image_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.property.imageRepositoryType">image_repository_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepository">ApprunnerServiceSourceConfigurationImageRepository</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `image_configuration`<sup>Required</sup> <a name="image_configuration" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.property.imageConfiguration"></a>

```python
image_configuration: ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference">ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference</a>

---

##### `image_configuration_input`<sup>Optional</sup> <a name="image_configuration_input" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.property.imageConfigurationInput"></a>

```python
image_configuration_input: IResolvable | ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration">ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration</a>

---

##### `image_identifier_input`<sup>Optional</sup> <a name="image_identifier_input" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.property.imageIdentifierInput"></a>

```python
image_identifier_input: str
```

- *Type:* str

---

##### `image_repository_type_input`<sup>Optional</sup> <a name="image_repository_type_input" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.property.imageRepositoryTypeInput"></a>

```python
image_repository_type_input: str
```

- *Type:* str

---

##### `image_identifier`<sup>Required</sup> <a name="image_identifier" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.property.imageIdentifier"></a>

```python
image_identifier: str
```

- *Type:* str

---

##### `image_repository_type`<sup>Required</sup> <a name="image_repository_type" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.property.imageRepositoryType"></a>

```python
image_repository_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ApprunnerServiceSourceConfigurationImageRepository
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepository">ApprunnerServiceSourceConfigurationImageRepository</a>

---


### ApprunnerServiceSourceConfigurationOutputReference <a name="ApprunnerServiceSourceConfigurationOutputReference" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import apprunner_service

apprunnerService.ApprunnerServiceSourceConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.putAuthenticationConfiguration">put_authentication_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.putCodeRepository">put_code_repository</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.putImageRepository">put_image_repository</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.resetAuthenticationConfiguration">reset_authentication_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.resetAutoDeploymentsEnabled">reset_auto_deployments_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.resetCodeRepository">reset_code_repository</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.resetImageRepository">reset_image_repository</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_authentication_configuration` <a name="put_authentication_configuration" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.putAuthenticationConfiguration"></a>

```python
def put_authentication_configuration(
  access_role_arn: str = None,
  connection_arn: str = None
) -> None
```

###### `access_role_arn`<sup>Optional</sup> <a name="access_role_arn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.putAuthenticationConfiguration.parameter.accessRoleArn"></a>

- *Type:* str

Access Role Arn.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_service#access_role_arn ApprunnerService#access_role_arn}

---

###### `connection_arn`<sup>Optional</sup> <a name="connection_arn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.putAuthenticationConfiguration.parameter.connectionArn"></a>

- *Type:* str

Connection Arn.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_service#connection_arn ApprunnerService#connection_arn}

---

##### `put_code_repository` <a name="put_code_repository" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.putCodeRepository"></a>

```python
def put_code_repository(
  code_configuration: ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfiguration = None,
  repository_url: str = None,
  source_code_version: ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersion = None,
  source_directory: str = None
) -> None
```

###### `code_configuration`<sup>Optional</sup> <a name="code_configuration" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.putCodeRepository.parameter.codeConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfiguration">ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfiguration</a>

Code Configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_service#code_configuration ApprunnerService#code_configuration}

---

###### `repository_url`<sup>Optional</sup> <a name="repository_url" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.putCodeRepository.parameter.repositoryUrl"></a>

- *Type:* str

Repository Url.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_service#repository_url ApprunnerService#repository_url}

---

###### `source_code_version`<sup>Optional</sup> <a name="source_code_version" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.putCodeRepository.parameter.sourceCodeVersion"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersion">ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersion</a>

Source Code Version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_service#source_code_version ApprunnerService#source_code_version}

---

###### `source_directory`<sup>Optional</sup> <a name="source_directory" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.putCodeRepository.parameter.sourceDirectory"></a>

- *Type:* str

Source Directory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_service#source_directory ApprunnerService#source_directory}

---

##### `put_image_repository` <a name="put_image_repository" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.putImageRepository"></a>

```python
def put_image_repository(
  image_configuration: ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration = None,
  image_identifier: str = None,
  image_repository_type: str = None
) -> None
```

###### `image_configuration`<sup>Optional</sup> <a name="image_configuration" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.putImageRepository.parameter.imageConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration">ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration</a>

Image Configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_service#image_configuration ApprunnerService#image_configuration}

---

###### `image_identifier`<sup>Optional</sup> <a name="image_identifier" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.putImageRepository.parameter.imageIdentifier"></a>

- *Type:* str

Image Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_service#image_identifier ApprunnerService#image_identifier}

---

###### `image_repository_type`<sup>Optional</sup> <a name="image_repository_type" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.putImageRepository.parameter.imageRepositoryType"></a>

- *Type:* str

Image Repository Type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_service#image_repository_type ApprunnerService#image_repository_type}

---

##### `reset_authentication_configuration` <a name="reset_authentication_configuration" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.resetAuthenticationConfiguration"></a>

```python
def reset_authentication_configuration() -> None
```

##### `reset_auto_deployments_enabled` <a name="reset_auto_deployments_enabled" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.resetAutoDeploymentsEnabled"></a>

```python
def reset_auto_deployments_enabled() -> None
```

##### `reset_code_repository` <a name="reset_code_repository" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.resetCodeRepository"></a>

```python
def reset_code_repository() -> None
```

##### `reset_image_repository` <a name="reset_image_repository" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.resetImageRepository"></a>

```python
def reset_image_repository() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.property.authenticationConfiguration">authentication_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference">ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.property.codeRepository">code_repository</a></code> | <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference">ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.property.imageRepository">image_repository</a></code> | <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference">ApprunnerServiceSourceConfigurationImageRepositoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.property.authenticationConfigurationInput">authentication_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfiguration">ApprunnerServiceSourceConfigurationAuthenticationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.property.autoDeploymentsEnabledInput">auto_deployments_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.property.codeRepositoryInput">code_repository_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepository">ApprunnerServiceSourceConfigurationCodeRepository</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.property.imageRepositoryInput">image_repository_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepository">ApprunnerServiceSourceConfigurationImageRepository</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.property.autoDeploymentsEnabled">auto_deployments_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfiguration">ApprunnerServiceSourceConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authentication_configuration`<sup>Required</sup> <a name="authentication_configuration" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.property.authenticationConfiguration"></a>

```python
authentication_configuration: ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference">ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference</a>

---

##### `code_repository`<sup>Required</sup> <a name="code_repository" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.property.codeRepository"></a>

```python
code_repository: ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference">ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference</a>

---

##### `image_repository`<sup>Required</sup> <a name="image_repository" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.property.imageRepository"></a>

```python
image_repository: ApprunnerServiceSourceConfigurationImageRepositoryOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference">ApprunnerServiceSourceConfigurationImageRepositoryOutputReference</a>

---

##### `authentication_configuration_input`<sup>Optional</sup> <a name="authentication_configuration_input" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.property.authenticationConfigurationInput"></a>

```python
authentication_configuration_input: IResolvable | ApprunnerServiceSourceConfigurationAuthenticationConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfiguration">ApprunnerServiceSourceConfigurationAuthenticationConfiguration</a>

---

##### `auto_deployments_enabled_input`<sup>Optional</sup> <a name="auto_deployments_enabled_input" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.property.autoDeploymentsEnabledInput"></a>

```python
auto_deployments_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `code_repository_input`<sup>Optional</sup> <a name="code_repository_input" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.property.codeRepositoryInput"></a>

```python
code_repository_input: IResolvable | ApprunnerServiceSourceConfigurationCodeRepository
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepository">ApprunnerServiceSourceConfigurationCodeRepository</a>

---

##### `image_repository_input`<sup>Optional</sup> <a name="image_repository_input" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.property.imageRepositoryInput"></a>

```python
image_repository_input: IResolvable | ApprunnerServiceSourceConfigurationImageRepository
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepository">ApprunnerServiceSourceConfigurationImageRepository</a>

---

##### `auto_deployments_enabled`<sup>Required</sup> <a name="auto_deployments_enabled" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.property.autoDeploymentsEnabled"></a>

```python
auto_deployments_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ApprunnerServiceSourceConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfiguration">ApprunnerServiceSourceConfiguration</a>

---


### ApprunnerServiceTagsList <a name="ApprunnerServiceTagsList" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import apprunner_service

apprunnerService.ApprunnerServiceTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ApprunnerServiceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTags">ApprunnerServiceTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ApprunnerServiceTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTags">ApprunnerServiceTags</a>]

---


### ApprunnerServiceTagsOutputReference <a name="ApprunnerServiceTagsOutputReference" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import apprunner_service

apprunnerService.ApprunnerServiceTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTags">ApprunnerServiceTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ApprunnerServiceTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTags">ApprunnerServiceTags</a>

---



