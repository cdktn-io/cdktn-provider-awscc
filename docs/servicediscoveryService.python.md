# `servicediscoveryService` Submodule <a name="`servicediscoveryService` Submodule" id="@cdktn/provider-awscc.servicediscoveryService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServicediscoveryService <a name="ServicediscoveryService" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicediscovery_service awscc_servicediscovery_service}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.Initializer"></a>

```python
from cdktn_provider_awscc import servicediscovery_service

servicediscoveryService.ServicediscoveryService(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  description: str = None,
  dns_config: ServicediscoveryServiceDnsConfig = None,
  health_check_config: ServicediscoveryServiceHealthCheckConfig = None,
  health_check_custom_config: ServicediscoveryServiceHealthCheckCustomConfig = None,
  name: str = None,
  namespace_id: str = None,
  service_attributes: typing.Mapping[str] = None,
  tags: IResolvable | typing.List[ServicediscoveryServiceTags] = None,
  type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.Initializer.parameter.description">description</a></code> | <code>str</code> | A description for the service. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.Initializer.parameter.dnsConfig">dns_config</a></code> | <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfig">ServicediscoveryServiceDnsConfig</a></code> | DNS-related configurations for the service. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.Initializer.parameter.healthCheckConfig">health_check_config</a></code> | <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfig">ServicediscoveryServiceHealthCheckConfig</a></code> | Settings for health checks. Used when routing is DNS-based. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.Initializer.parameter.healthCheckCustomConfig">health_check_custom_config</a></code> | <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfig">ServicediscoveryServiceHealthCheckCustomConfig</a></code> | Settings for custom health checks. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the service. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.Initializer.parameter.namespaceId">namespace_id</a></code> | <code>str</code> | The ID of the namespace in which the service is created. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.Initializer.parameter.serviceAttributes">service_attributes</a></code> | <code>typing.Mapping[str]</code> | A string map that contains attributes and values for the service. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTags">ServicediscoveryServiceTags</a>]</code> | An array of key-value pairs to associate with the service. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.Initializer.parameter.type">type</a></code> | <code>str</code> | The type of service. Supported values are HTTP or DNS. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.Initializer.parameter.description"></a>

- *Type:* str

A description for the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicediscovery_service#description ServicediscoveryService#description}

---

##### `dns_config`<sup>Optional</sup> <a name="dns_config" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.Initializer.parameter.dnsConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfig">ServicediscoveryServiceDnsConfig</a>

DNS-related configurations for the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicediscovery_service#dns_config ServicediscoveryService#dns_config}

---

##### `health_check_config`<sup>Optional</sup> <a name="health_check_config" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.Initializer.parameter.healthCheckConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfig">ServicediscoveryServiceHealthCheckConfig</a>

Settings for health checks. Used when routing is DNS-based.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicediscovery_service#health_check_config ServicediscoveryService#health_check_config}

---

##### `health_check_custom_config`<sup>Optional</sup> <a name="health_check_custom_config" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.Initializer.parameter.healthCheckCustomConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfig">ServicediscoveryServiceHealthCheckCustomConfig</a>

Settings for custom health checks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicediscovery_service#health_check_custom_config ServicediscoveryService#health_check_custom_config}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.Initializer.parameter.name"></a>

- *Type:* str

The name of the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicediscovery_service#name ServicediscoveryService#name}

---

##### `namespace_id`<sup>Optional</sup> <a name="namespace_id" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.Initializer.parameter.namespaceId"></a>

- *Type:* str

The ID of the namespace in which the service is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicediscovery_service#namespace_id ServicediscoveryService#namespace_id}

---

##### `service_attributes`<sup>Optional</sup> <a name="service_attributes" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.Initializer.parameter.serviceAttributes"></a>

- *Type:* typing.Mapping[str]

A string map that contains attributes and values for the service.

You can specify a maximum of 30 key-value pairs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicediscovery_service#service_attributes ServicediscoveryService#service_attributes}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTags">ServicediscoveryServiceTags</a>]

An array of key-value pairs to associate with the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicediscovery_service#tags ServicediscoveryService#tags}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.Initializer.parameter.type"></a>

- *Type:* str

The type of service. Supported values are HTTP or DNS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicediscovery_service#type ServicediscoveryService#type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.putDnsConfig">put_dns_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.putHealthCheckConfig">put_health_check_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.putHealthCheckCustomConfig">put_health_check_custom_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.resetDnsConfig">reset_dns_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.resetHealthCheckConfig">reset_health_check_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.resetHealthCheckCustomConfig">reset_health_check_custom_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.resetNamespaceId">reset_namespace_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.resetServiceAttributes">reset_service_attributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.resetType">reset_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_dns_config` <a name="put_dns_config" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.putDnsConfig"></a>

```python
def put_dns_config(
  dns_records: IResolvable | typing.List[ServicediscoveryServiceDnsConfigDnsRecords] = None,
  namespace_id: str = None,
  routing_policy: str = None
) -> None
```

###### `dns_records`<sup>Optional</sup> <a name="dns_records" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.putDnsConfig.parameter.dnsRecords"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecords">ServicediscoveryServiceDnsConfigDnsRecords</a>]

A list of DNS records associated with the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicediscovery_service#dns_records ServicediscoveryService#dns_records}

---

###### `namespace_id`<sup>Optional</sup> <a name="namespace_id" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.putDnsConfig.parameter.namespaceId"></a>

- *Type:* str

The ID of the namespace for the DNS configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicediscovery_service#namespace_id ServicediscoveryService#namespace_id}

---

###### `routing_policy`<sup>Optional</sup> <a name="routing_policy" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.putDnsConfig.parameter.routingPolicy"></a>

- *Type:* str

The routing policy to use for DNS queries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicediscovery_service#routing_policy ServicediscoveryService#routing_policy}

---

##### `put_health_check_config` <a name="put_health_check_config" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.putHealthCheckConfig"></a>

```python
def put_health_check_config(
  failure_threshold: typing.Union[int, float] = None,
  resource_path: str = None,
  type: str = None
) -> None
```

###### `failure_threshold`<sup>Optional</sup> <a name="failure_threshold" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.putHealthCheckConfig.parameter.failureThreshold"></a>

- *Type:* typing.Union[int, float]

The number of consecutive health check failures that must occur before declaring the service unhealthy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicediscovery_service#failure_threshold ServicediscoveryService#failure_threshold}

---

###### `resource_path`<sup>Optional</sup> <a name="resource_path" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.putHealthCheckConfig.parameter.resourcePath"></a>

- *Type:* str

The path to ping on the service for health checks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicediscovery_service#resource_path ServicediscoveryService#resource_path}

---

###### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.putHealthCheckConfig.parameter.type"></a>

- *Type:* str

The type of health check (e.g., HTTP, HTTPS, TCP).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicediscovery_service#type ServicediscoveryService#type}

---

##### `put_health_check_custom_config` <a name="put_health_check_custom_config" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.putHealthCheckCustomConfig"></a>

```python
def put_health_check_custom_config(
  failure_threshold: typing.Union[int, float] = None
) -> None
```

###### `failure_threshold`<sup>Optional</sup> <a name="failure_threshold" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.putHealthCheckCustomConfig.parameter.failureThreshold"></a>

- *Type:* typing.Union[int, float]

The number of consecutive health check failures required before the service is considered unhealthy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicediscovery_service#failure_threshold ServicediscoveryService#failure_threshold}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[ServicediscoveryServiceTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTags">ServicediscoveryServiceTags</a>]

---

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_dns_config` <a name="reset_dns_config" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.resetDnsConfig"></a>

```python
def reset_dns_config() -> None
```

##### `reset_health_check_config` <a name="reset_health_check_config" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.resetHealthCheckConfig"></a>

```python
def reset_health_check_config() -> None
```

##### `reset_health_check_custom_config` <a name="reset_health_check_custom_config" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.resetHealthCheckCustomConfig"></a>

```python
def reset_health_check_custom_config() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_namespace_id` <a name="reset_namespace_id" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.resetNamespaceId"></a>

```python
def reset_namespace_id() -> None
```

##### `reset_service_attributes` <a name="reset_service_attributes" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.resetServiceAttributes"></a>

```python
def reset_service_attributes() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.resetType"></a>

```python
def reset_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a ServicediscoveryService resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.isConstruct"></a>

```python
from cdktn_provider_awscc import servicediscovery_service

servicediscoveryService.ServicediscoveryService.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.isTerraformElement"></a>

```python
from cdktn_provider_awscc import servicediscovery_service

servicediscoveryService.ServicediscoveryService.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.isTerraformResource"></a>

```python
from cdktn_provider_awscc import servicediscovery_service

servicediscoveryService.ServicediscoveryService.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import servicediscovery_service

servicediscoveryService.ServicediscoveryService.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a ServicediscoveryService resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ServicediscoveryService to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ServicediscoveryService that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicediscovery_service#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ServicediscoveryService to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.dnsConfig">dns_config</a></code> | <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference">ServicediscoveryServiceDnsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.healthCheckConfig">health_check_config</a></code> | <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference">ServicediscoveryServiceHealthCheckConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.healthCheckCustomConfig">health_check_custom_config</a></code> | <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfigOutputReference">ServicediscoveryServiceHealthCheckCustomConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.serviceId">service_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsList">ServicediscoveryServiceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.dnsConfigInput">dns_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfig">ServicediscoveryServiceDnsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.healthCheckConfigInput">health_check_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfig">ServicediscoveryServiceHealthCheckConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.healthCheckCustomConfigInput">health_check_custom_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfig">ServicediscoveryServiceHealthCheckCustomConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.namespaceIdInput">namespace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.serviceAttributesInput">service_attributes_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTags">ServicediscoveryServiceTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.namespaceId">namespace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.serviceAttributes">service_attributes</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `dns_config`<sup>Required</sup> <a name="dns_config" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.dnsConfig"></a>

```python
dns_config: ServicediscoveryServiceDnsConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference">ServicediscoveryServiceDnsConfigOutputReference</a>

---

##### `health_check_config`<sup>Required</sup> <a name="health_check_config" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.healthCheckConfig"></a>

```python
health_check_config: ServicediscoveryServiceHealthCheckConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference">ServicediscoveryServiceHealthCheckConfigOutputReference</a>

---

##### `health_check_custom_config`<sup>Required</sup> <a name="health_check_custom_config" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.healthCheckCustomConfig"></a>

```python
health_check_custom_config: ServicediscoveryServiceHealthCheckCustomConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfigOutputReference">ServicediscoveryServiceHealthCheckCustomConfigOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `service_id`<sup>Required</sup> <a name="service_id" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.serviceId"></a>

```python
service_id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.tags"></a>

```python
tags: ServicediscoveryServiceTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsList">ServicediscoveryServiceTagsList</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `dns_config_input`<sup>Optional</sup> <a name="dns_config_input" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.dnsConfigInput"></a>

```python
dns_config_input: IResolvable | ServicediscoveryServiceDnsConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfig">ServicediscoveryServiceDnsConfig</a>

---

##### `health_check_config_input`<sup>Optional</sup> <a name="health_check_config_input" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.healthCheckConfigInput"></a>

```python
health_check_config_input: IResolvable | ServicediscoveryServiceHealthCheckConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfig">ServicediscoveryServiceHealthCheckConfig</a>

---

##### `health_check_custom_config_input`<sup>Optional</sup> <a name="health_check_custom_config_input" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.healthCheckCustomConfigInput"></a>

```python
health_check_custom_config_input: IResolvable | ServicediscoveryServiceHealthCheckCustomConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfig">ServicediscoveryServiceHealthCheckCustomConfig</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `namespace_id_input`<sup>Optional</sup> <a name="namespace_id_input" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.namespaceIdInput"></a>

```python
namespace_id_input: str
```

- *Type:* str

---

##### `service_attributes_input`<sup>Optional</sup> <a name="service_attributes_input" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.serviceAttributesInput"></a>

```python
service_attributes_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[ServicediscoveryServiceTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTags">ServicediscoveryServiceTags</a>]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `namespace_id`<sup>Required</sup> <a name="namespace_id" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.namespaceId"></a>

```python
namespace_id: str
```

- *Type:* str

---

##### `service_attributes`<sup>Required</sup> <a name="service_attributes" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.serviceAttributes"></a>

```python
service_attributes: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ServicediscoveryServiceConfig <a name="ServicediscoveryServiceConfig" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceConfig.Initializer"></a>

```python
from cdktn_provider_awscc import servicediscovery_service

servicediscoveryService.ServicediscoveryServiceConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  description: str = None,
  dns_config: ServicediscoveryServiceDnsConfig = None,
  health_check_config: ServicediscoveryServiceHealthCheckConfig = None,
  health_check_custom_config: ServicediscoveryServiceHealthCheckCustomConfig = None,
  name: str = None,
  namespace_id: str = None,
  service_attributes: typing.Mapping[str] = None,
  tags: IResolvable | typing.List[ServicediscoveryServiceTags] = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceConfig.property.description">description</a></code> | <code>str</code> | A description for the service. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceConfig.property.dnsConfig">dns_config</a></code> | <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfig">ServicediscoveryServiceDnsConfig</a></code> | DNS-related configurations for the service. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceConfig.property.healthCheckConfig">health_check_config</a></code> | <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfig">ServicediscoveryServiceHealthCheckConfig</a></code> | Settings for health checks. Used when routing is DNS-based. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceConfig.property.healthCheckCustomConfig">health_check_custom_config</a></code> | <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfig">ServicediscoveryServiceHealthCheckCustomConfig</a></code> | Settings for custom health checks. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceConfig.property.name">name</a></code> | <code>str</code> | The name of the service. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceConfig.property.namespaceId">namespace_id</a></code> | <code>str</code> | The ID of the namespace in which the service is created. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceConfig.property.serviceAttributes">service_attributes</a></code> | <code>typing.Mapping[str]</code> | A string map that contains attributes and values for the service. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTags">ServicediscoveryServiceTags</a>]</code> | An array of key-value pairs to associate with the service. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceConfig.property.type">type</a></code> | <code>str</code> | The type of service. Supported values are HTTP or DNS. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A description for the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicediscovery_service#description ServicediscoveryService#description}

---

##### `dns_config`<sup>Optional</sup> <a name="dns_config" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceConfig.property.dnsConfig"></a>

```python
dns_config: ServicediscoveryServiceDnsConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfig">ServicediscoveryServiceDnsConfig</a>

DNS-related configurations for the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicediscovery_service#dns_config ServicediscoveryService#dns_config}

---

##### `health_check_config`<sup>Optional</sup> <a name="health_check_config" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceConfig.property.healthCheckConfig"></a>

```python
health_check_config: ServicediscoveryServiceHealthCheckConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfig">ServicediscoveryServiceHealthCheckConfig</a>

Settings for health checks. Used when routing is DNS-based.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicediscovery_service#health_check_config ServicediscoveryService#health_check_config}

---

##### `health_check_custom_config`<sup>Optional</sup> <a name="health_check_custom_config" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceConfig.property.healthCheckCustomConfig"></a>

```python
health_check_custom_config: ServicediscoveryServiceHealthCheckCustomConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfig">ServicediscoveryServiceHealthCheckCustomConfig</a>

Settings for custom health checks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicediscovery_service#health_check_custom_config ServicediscoveryService#health_check_custom_config}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicediscovery_service#name ServicediscoveryService#name}

---

##### `namespace_id`<sup>Optional</sup> <a name="namespace_id" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceConfig.property.namespaceId"></a>

```python
namespace_id: str
```

- *Type:* str

The ID of the namespace in which the service is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicediscovery_service#namespace_id ServicediscoveryService#namespace_id}

---

##### `service_attributes`<sup>Optional</sup> <a name="service_attributes" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceConfig.property.serviceAttributes"></a>

```python
service_attributes: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

A string map that contains attributes and values for the service.

You can specify a maximum of 30 key-value pairs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicediscovery_service#service_attributes ServicediscoveryService#service_attributes}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[ServicediscoveryServiceTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTags">ServicediscoveryServiceTags</a>]

An array of key-value pairs to associate with the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicediscovery_service#tags ServicediscoveryService#tags}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceConfig.property.type"></a>

```python
type: str
```

- *Type:* str

The type of service. Supported values are HTTP or DNS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicediscovery_service#type ServicediscoveryService#type}

---

### ServicediscoveryServiceDnsConfig <a name="ServicediscoveryServiceDnsConfig" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfig.Initializer"></a>

```python
from cdktn_provider_awscc import servicediscovery_service

servicediscoveryService.ServicediscoveryServiceDnsConfig(
  dns_records: IResolvable | typing.List[ServicediscoveryServiceDnsConfigDnsRecords] = None,
  namespace_id: str = None,
  routing_policy: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfig.property.dnsRecords">dns_records</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecords">ServicediscoveryServiceDnsConfigDnsRecords</a>]</code> | A list of DNS records associated with the service. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfig.property.namespaceId">namespace_id</a></code> | <code>str</code> | The ID of the namespace for the DNS configuration. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfig.property.routingPolicy">routing_policy</a></code> | <code>str</code> | The routing policy to use for DNS queries. |

---

##### `dns_records`<sup>Optional</sup> <a name="dns_records" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfig.property.dnsRecords"></a>

```python
dns_records: IResolvable | typing.List[ServicediscoveryServiceDnsConfigDnsRecords]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecords">ServicediscoveryServiceDnsConfigDnsRecords</a>]

A list of DNS records associated with the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicediscovery_service#dns_records ServicediscoveryService#dns_records}

---

##### `namespace_id`<sup>Optional</sup> <a name="namespace_id" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfig.property.namespaceId"></a>

```python
namespace_id: str
```

- *Type:* str

The ID of the namespace for the DNS configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicediscovery_service#namespace_id ServicediscoveryService#namespace_id}

---

##### `routing_policy`<sup>Optional</sup> <a name="routing_policy" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfig.property.routingPolicy"></a>

```python
routing_policy: str
```

- *Type:* str

The routing policy to use for DNS queries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicediscovery_service#routing_policy ServicediscoveryService#routing_policy}

---

### ServicediscoveryServiceDnsConfigDnsRecords <a name="ServicediscoveryServiceDnsConfigDnsRecords" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecords"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecords.Initializer"></a>

```python
from cdktn_provider_awscc import servicediscovery_service

servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecords(
  ttl: typing.Union[int, float] = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecords.property.ttl">ttl</a></code> | <code>typing.Union[int, float]</code> | The time-to-live (TTL) for the DNS record. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecords.property.type">type</a></code> | <code>str</code> | The DNS record type (e.g., A, AAAA, SRV). |

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecords.property.ttl"></a>

```python
ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The time-to-live (TTL) for the DNS record.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicediscovery_service#ttl ServicediscoveryService#ttl}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecords.property.type"></a>

```python
type: str
```

- *Type:* str

The DNS record type (e.g., A, AAAA, SRV).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicediscovery_service#type ServicediscoveryService#type}

---

### ServicediscoveryServiceHealthCheckConfig <a name="ServicediscoveryServiceHealthCheckConfig" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfig.Initializer"></a>

```python
from cdktn_provider_awscc import servicediscovery_service

servicediscoveryService.ServicediscoveryServiceHealthCheckConfig(
  failure_threshold: typing.Union[int, float] = None,
  resource_path: str = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfig.property.failureThreshold">failure_threshold</a></code> | <code>typing.Union[int, float]</code> | The number of consecutive health check failures that must occur before declaring the service unhealthy. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfig.property.resourcePath">resource_path</a></code> | <code>str</code> | The path to ping on the service for health checks. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfig.property.type">type</a></code> | <code>str</code> | The type of health check (e.g., HTTP, HTTPS, TCP). |

---

##### `failure_threshold`<sup>Optional</sup> <a name="failure_threshold" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfig.property.failureThreshold"></a>

```python
failure_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of consecutive health check failures that must occur before declaring the service unhealthy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicediscovery_service#failure_threshold ServicediscoveryService#failure_threshold}

---

##### `resource_path`<sup>Optional</sup> <a name="resource_path" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfig.property.resourcePath"></a>

```python
resource_path: str
```

- *Type:* str

The path to ping on the service for health checks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicediscovery_service#resource_path ServicediscoveryService#resource_path}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfig.property.type"></a>

```python
type: str
```

- *Type:* str

The type of health check (e.g., HTTP, HTTPS, TCP).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicediscovery_service#type ServicediscoveryService#type}

---

### ServicediscoveryServiceHealthCheckCustomConfig <a name="ServicediscoveryServiceHealthCheckCustomConfig" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfig.Initializer"></a>

```python
from cdktn_provider_awscc import servicediscovery_service

servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfig(
  failure_threshold: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfig.property.failureThreshold">failure_threshold</a></code> | <code>typing.Union[int, float]</code> | The number of consecutive health check failures required before the service is considered unhealthy. |

---

##### `failure_threshold`<sup>Optional</sup> <a name="failure_threshold" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfig.property.failureThreshold"></a>

```python
failure_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of consecutive health check failures required before the service is considered unhealthy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicediscovery_service#failure_threshold ServicediscoveryService#failure_threshold}

---

### ServicediscoveryServiceTags <a name="ServicediscoveryServiceTags" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTags.Initializer"></a>

```python
from cdktn_provider_awscc import servicediscovery_service

servicediscoveryService.ServicediscoveryServiceTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTags.property.value">value</a></code> | <code>str</code> | The value of the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicediscovery_service#key ServicediscoveryService#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicediscovery_service#value ServicediscoveryService#value}

---

## Classes <a name="Classes" id="Classes"></a>

### ServicediscoveryServiceDnsConfigDnsRecordsList <a name="ServicediscoveryServiceDnsConfigDnsRecordsList" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsList.Initializer"></a>

```python
from cdktn_provider_awscc import servicediscovery_service

servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ServicediscoveryServiceDnsConfigDnsRecordsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecords">ServicediscoveryServiceDnsConfigDnsRecords</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ServicediscoveryServiceDnsConfigDnsRecords]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecords">ServicediscoveryServiceDnsConfigDnsRecords</a>]

---


### ServicediscoveryServiceDnsConfigDnsRecordsOutputReference <a name="ServicediscoveryServiceDnsConfigDnsRecordsOutputReference" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import servicediscovery_service

servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.resetTtl">reset_ttl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_ttl` <a name="reset_ttl" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.resetTtl"></a>

```python
def reset_ttl() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.property.ttlInput">ttl_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.property.ttl">ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecords">ServicediscoveryServiceDnsConfigDnsRecords</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ttl_input`<sup>Optional</sup> <a name="ttl_input" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.property.ttlInput"></a>

```python
ttl_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.property.ttl"></a>

```python
ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ServicediscoveryServiceDnsConfigDnsRecords
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecords">ServicediscoveryServiceDnsConfigDnsRecords</a>

---


### ServicediscoveryServiceDnsConfigOutputReference <a name="ServicediscoveryServiceDnsConfigOutputReference" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import servicediscovery_service

servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.putDnsRecords">put_dns_records</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.resetDnsRecords">reset_dns_records</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.resetNamespaceId">reset_namespace_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.resetRoutingPolicy">reset_routing_policy</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_dns_records` <a name="put_dns_records" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.putDnsRecords"></a>

```python
def put_dns_records(
  value: IResolvable | typing.List[ServicediscoveryServiceDnsConfigDnsRecords]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.putDnsRecords.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecords">ServicediscoveryServiceDnsConfigDnsRecords</a>]

---

##### `reset_dns_records` <a name="reset_dns_records" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.resetDnsRecords"></a>

```python
def reset_dns_records() -> None
```

##### `reset_namespace_id` <a name="reset_namespace_id" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.resetNamespaceId"></a>

```python
def reset_namespace_id() -> None
```

##### `reset_routing_policy` <a name="reset_routing_policy" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.resetRoutingPolicy"></a>

```python
def reset_routing_policy() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.property.dnsRecords">dns_records</a></code> | <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsList">ServicediscoveryServiceDnsConfigDnsRecordsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.property.dnsRecordsInput">dns_records_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecords">ServicediscoveryServiceDnsConfigDnsRecords</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.property.namespaceIdInput">namespace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.property.routingPolicyInput">routing_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.property.namespaceId">namespace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.property.routingPolicy">routing_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfig">ServicediscoveryServiceDnsConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dns_records`<sup>Required</sup> <a name="dns_records" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.property.dnsRecords"></a>

```python
dns_records: ServicediscoveryServiceDnsConfigDnsRecordsList
```

- *Type:* <a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsList">ServicediscoveryServiceDnsConfigDnsRecordsList</a>

---

##### `dns_records_input`<sup>Optional</sup> <a name="dns_records_input" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.property.dnsRecordsInput"></a>

```python
dns_records_input: IResolvable | typing.List[ServicediscoveryServiceDnsConfigDnsRecords]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecords">ServicediscoveryServiceDnsConfigDnsRecords</a>]

---

##### `namespace_id_input`<sup>Optional</sup> <a name="namespace_id_input" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.property.namespaceIdInput"></a>

```python
namespace_id_input: str
```

- *Type:* str

---

##### `routing_policy_input`<sup>Optional</sup> <a name="routing_policy_input" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.property.routingPolicyInput"></a>

```python
routing_policy_input: str
```

- *Type:* str

---

##### `namespace_id`<sup>Required</sup> <a name="namespace_id" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.property.namespaceId"></a>

```python
namespace_id: str
```

- *Type:* str

---

##### `routing_policy`<sup>Required</sup> <a name="routing_policy" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.property.routingPolicy"></a>

```python
routing_policy: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ServicediscoveryServiceDnsConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfig">ServicediscoveryServiceDnsConfig</a>

---


### ServicediscoveryServiceHealthCheckConfigOutputReference <a name="ServicediscoveryServiceHealthCheckConfigOutputReference" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import servicediscovery_service

servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.resetFailureThreshold">reset_failure_threshold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.resetResourcePath">reset_resource_path</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_failure_threshold` <a name="reset_failure_threshold" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.resetFailureThreshold"></a>

```python
def reset_failure_threshold() -> None
```

##### `reset_resource_path` <a name="reset_resource_path" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.resetResourcePath"></a>

```python
def reset_resource_path() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.property.failureThresholdInput">failure_threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.property.resourcePathInput">resource_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.property.failureThreshold">failure_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.property.resourcePath">resource_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfig">ServicediscoveryServiceHealthCheckConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `failure_threshold_input`<sup>Optional</sup> <a name="failure_threshold_input" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.property.failureThresholdInput"></a>

```python
failure_threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_path_input`<sup>Optional</sup> <a name="resource_path_input" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.property.resourcePathInput"></a>

```python
resource_path_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `failure_threshold`<sup>Required</sup> <a name="failure_threshold" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.property.failureThreshold"></a>

```python
failure_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_path`<sup>Required</sup> <a name="resource_path" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.property.resourcePath"></a>

```python
resource_path: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ServicediscoveryServiceHealthCheckConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfig">ServicediscoveryServiceHealthCheckConfig</a>

---


### ServicediscoveryServiceHealthCheckCustomConfigOutputReference <a name="ServicediscoveryServiceHealthCheckCustomConfigOutputReference" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import servicediscovery_service

servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfigOutputReference.resetFailureThreshold">reset_failure_threshold</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_failure_threshold` <a name="reset_failure_threshold" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfigOutputReference.resetFailureThreshold"></a>

```python
def reset_failure_threshold() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfigOutputReference.property.failureThresholdInput">failure_threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfigOutputReference.property.failureThreshold">failure_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfig">ServicediscoveryServiceHealthCheckCustomConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `failure_threshold_input`<sup>Optional</sup> <a name="failure_threshold_input" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfigOutputReference.property.failureThresholdInput"></a>

```python
failure_threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `failure_threshold`<sup>Required</sup> <a name="failure_threshold" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfigOutputReference.property.failureThreshold"></a>

```python
failure_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ServicediscoveryServiceHealthCheckCustomConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfig">ServicediscoveryServiceHealthCheckCustomConfig</a>

---


### ServicediscoveryServiceTagsList <a name="ServicediscoveryServiceTagsList" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import servicediscovery_service

servicediscoveryService.ServicediscoveryServiceTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ServicediscoveryServiceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTags">ServicediscoveryServiceTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ServicediscoveryServiceTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTags">ServicediscoveryServiceTags</a>]

---


### ServicediscoveryServiceTagsOutputReference <a name="ServicediscoveryServiceTagsOutputReference" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import servicediscovery_service

servicediscoveryService.ServicediscoveryServiceTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTags">ServicediscoveryServiceTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ServicediscoveryServiceTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTags">ServicediscoveryServiceTags</a>

---



